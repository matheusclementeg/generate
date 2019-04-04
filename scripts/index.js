(function(){
    var app = angular.module('CopyDemo', []);
    
    app.controller('formInput', ['$scope', function($scope){
      $scope.input = {
        brand: 'Matheus Clemente',
        subjectLine: 'Você NÃO está mandando email certo!',
        preheader: 'Sim! Entenda como mandar emails que convertem...',
        followupText: "Aqui você vai entender como melhorar sua taxa de conversão via email."
      };
    }]);
  })();