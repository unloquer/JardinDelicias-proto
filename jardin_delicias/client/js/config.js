/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise("/index/main");

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $stateProvider
    .state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "views/common/content.html",
    })
    .state('index.main', {
      url: "/main",
      templateUrl: "views/main.html",
      data: { pageTitle: 'Example view' }
    })
    .state('index.minor', {
      url: "/minor",
      templateUrl: "views/minor.html",
      data: { pageTitle: 'Example view' }
    })
    .state('victimas', {
      url: "/victimas",
      templateUrl: "views/home.html",
      resolve: {
        uiData: function($rootScope, dataService) {
          dataService.filtros(function(data) {
            $rootScope.filtros = {
              'tipificaciones': data[0].filtros,
              'responsables': data[1].filtros,
              'departamentos': data[2].filtros
            };
          });
        },
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: [
                'js/bower_components/leaflet/dist/leaflet.css'
              ]
            },
            {
              insertBefore: '#loadBefore',
              name: 'victimas.directives',
              files: [
                'css/plugins/chosen/chosen.css',
                'js/plugins/chosen/chosen.jquery.js',
                'js/plugins/chosen/chosen.js'
              ]
            }
          ]);
        }
      }
    });
}
angular
  .module('victimas')
  .config(config)
  .run(function($rootScope, $state, dataService) {
    $rootScope.$state = $state;
  });
