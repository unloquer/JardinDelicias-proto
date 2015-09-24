angular.module('victimas')
	.service(
    'dataService',
    function($http, $q) {
      return {
        filtros: filtros
      }

      function filtros(cb) {
        $http.get('/data/filtros.json')
          .success(function(data, status, headers, config) {
            cb(data);
          })
          .error(function(err) {
            console.log(err);
          });
      }
    }
  );