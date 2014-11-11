(function() {
  'use strict';

  app.controller('HomeCtrl', ['$scope', 'FetchFileFactory',
    function($scope, FetchFileFactory) {
      $scope.fileViewer = 'Please select a file to view its contents';

      $scope.nodeSelected = function(e, data) {
        var _l = data.node.li_attr;
        // console.log("_l is : ",_l);
        // console.log("data is : ",data);
        // console.log("e is : ",e);
        // console.log("_l.isLeaf is : ",_l.isLeaf);

        if (_l.isLeaf) {
          console.log("_l.base is : ",_l.base);

          FetchFileFactory.fetchFile(_l.base).then(function(data) {
              var _d = data.data;
              var Type_file = _l.base.split('.');
              var Type = Type_file[Type_file.length - 1];
              if('pdf' == Type || "jpg" == Type){
                console.log("Type is : ",Type);
                console.log('inside : Before data is ',data);
                var link_ref = "<a href='http://www.google.com'>Click here to view file</a>"
                $scope.link_ref = link_ref;
                _d = 'File not supported!! Cant show the file content';
                // console.log('inside : After,',$scope.fileViewer);
                // window.open(_l.base);
              }
              else if (typeof _d == 'object') {
                console.log('inside : else');
                _d = JSON.stringify(_d, undefined, 2);
                $scope.link_ref = " ";
                // $scope.fileViewer = _d;
              }
              $scope.fileViewer = _d;

            });
        } else {

          //http://jimhoskins.com/2012/12/17/angularjs-and-apply.html//
          $scope.$apply(function() {
            $scope.fileViewer = 'Please select a file to view its contents';
            $scope.link_ref = " ";
          });
        }
      };
    }
  ]);

}());
