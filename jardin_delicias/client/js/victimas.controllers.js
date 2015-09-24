'use strict';
angular.module('victimas')
  .controller('VictimasCtrl', ['$scope', 'dataService', 'leafletData', 'Reporte', function($scope, dataService, leafletData, Reporte) {
    $scope.top = {};
    $scope.status = {};
    $scope.status.open = true;
    $scope.oneAtATime = false;
    $scope.selected = {
      tipificacion: [],
      responsable: [],
      ubicacion: []
    };

    $scope.$on('chosen:updated', function(e, args) {
      var field = args.field.split('.').pop();
      $scope.selected[field] = args.selected;

      var filter = { filter: {}};
      Object.keys($scope.selected).forEach(function(f) {
        if($scope.selected[f].length) {
          filter.filter['_'+f] = $scope.selected[f].join(',');
        }
      });

      Reporte.find(filter, function(data) {
        $scope.stats = data.pop();
        $scope.aggs = $scope.stats.aggs;
        resolverTipificaciones($scope.aggs.tipificacion, 5);
        layer.setStyle(style);
      });
    });

    dataService.filtros(function(data) {
      $scope.filtros = {
        'tipificaciones': data[0].filtros,
        'responsables': data[1].filtros,
        'departamentos': data[2].filtros
      };
    });

    Reporte.find({}, function(data) {
      $scope.stats = data.pop();
      $scope.aggs = $scope.stats.aggs;
      // console.log($scope.aggs);
      $scope.reportes = data;
      resolverTipificaciones($scope.aggs.tipificacion, 5);

      leafletData.getMap().then(function(map) {
        omnivore.topojson('/data/municipios.topojson', null, layer)
        .addTo(map);
      });

      setupHistogram();

    });

    function resolverTipificaciones(t, n) {
      var top_n = _.take(t, n);
      $scope.top.tipificaciones = top_n.map(function(e) {
        return {
          key: (function() {
            return _.pluck(_.where($scope.filtros.tipificaciones, { codigo: e.key }), 'nombre').shift();
          })(),
          count: e.doc_count
        };
      });
    };

    $scope.layers = {
      baselayers: {
        mapbox_terrain: {
          name: 'Mapbox Terrain',
          url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
          type: 'xyz',
          layerOptions: {
            apikey: 'pk.eyJ1Ijoic29mcml0byIsImEiOiIySzg3REhRIn0.2QFIYC9bmtbGPqk90CDdkQ',
            mapid: 'examples.map-20v6611k'
          }
        }
      }
    };

    angular.extend($scope, {
      center: {
        lat: 4.5980478,
        lng: -74.0760867,
        zoom: 6
      }
    });

    var layer = L.geoJson(null, {
      style: style,
      onEachFeature: onEachFeature
    });

    function highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });
      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }
    }

    function getColorByCasos(id) {
      var n = _.pluck(_.where($scope.aggs.DIVIPOLA, { key: parseInt(id).toString() }), 'doc_count').shift();
      return getColor(n);
    }

    function getColor(d) {
      return (
        d > 600 ? '#800026' :
        d > 400 ? '#BD0026' :
        d > 200 ? '#E31A1C' :
        d > 80 ? '#FC4E2A' :
        d > 50 ? '#FD8D3C' :
        d > 20 ? '#FEB24C' :
        d > 0 ? '#FED976' : 'white' //'#FFEDA0'
      );
    }

    function resetHighlight(e) {
      layer.resetStyle(e.target);
      //        info.update();
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    function style(feature) {
      // console.log(feature.properties);
      return {
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.6,
        fillColor: getColorByCasos(feature.properties.DIVIPOLA)
      };
    }

    function setupHistogram() {
      var ds = crossfilter($scope.aggs.tiempo);
      var dateFormat = d3.time.format('%Y-%m-%d');
      var meses = ds.dimension(function(d) {
        var parsedDate = dateFormat.parse(d.key_as_string);
        return d3.time.month(parsedDate);
      });

      var casosPorMesGroup = meses.group().reduceSum(function(d) {
        return d.doc_count;
      });

      var chart = dc.barChart('#histograma-casos');
      chart.width(903)
        .height(40)
        .margins({top: 0, right: 1, bottom: 17, left: 0})
        .dimension(meses)
        .group(casosPorMesGroup)
        .gap(2)
        .x(d3.time.scale().domain([new Date(2001, 0, 1), new Date(2014, 5, 30)]))
        .round(d3.time.month.round)
        // .alwaysUseRounding(true)
        .xUnits(d3.time.months);
      console.log(chart.colors(["#1ab394"]));
      dc.renderAll();
    }
  }]);
