(function() {
  'use strict';

  app.factory('FetchFileFactory', ['$http',
    function($http) {
      var _factory = {};

      _factory.fetchFile = function(file) {console.log('file is ',file);
        return $http.get('/api/resource?resource=' + encodeURIComponent(file));
      };

      console.log('_factory is ',_factory);
      return _factory;
    }
  ]);

}());
