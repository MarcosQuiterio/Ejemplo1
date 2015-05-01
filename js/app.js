(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [
          { 
              autor: 'Leonel',
              label: '1h',
              desc: 'Trabajar demo de soporte',
			  categoria: 'Asunto',
			  fecha: '22/04/2015',
			  Area: 'todas las areas'
          },
          { 
              autor: 'Martin',
              label: '1h',
              desc: 'Arreglar login',
			  categoria: 'Asunto',
			  fecha: '22/04/2015',
			  Area: 'todas las areas'
          },
          { 
              autor: 'John',
              label: '2 horas',
              desc: 'Cursos',
			  categoria: 'Asunto',
			  fecha: '22/04/2015',
			  Area: 'Marketing'
          },
          { 
              autor: 'Marcos',
              label: '2 horas',
              desc: 'Asunto',
			  categoria: 'Aviso',
			  fecha: '22/04/2015',
			  Area: 'Soporte'
          }
      ]; 
      
      return data;
  });
})();

