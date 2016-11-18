(function() {

   "use strict";

   console.log('hello');

   angular.module('myApp',[])
          .controller('myController', myController);



/*1controller = 1 fonction
* scope est un onjet définissant la scope de mon *controller*/
  function myController($scope){

  /*this est un objet qui représente mon controller*/

    $scope.nom = 'Marin';
    $scope.prenom = 'flo';
    $scope.salaire = '';
    $scope.pres = "Trump";


    $scope.modifierPrenom = function(){
      $scope.prenom = 'Guy';
    }



  $scope.seeDetail = false;

  $scope.afficheInfos = function(){
    $scope.seeDetail = !$scope.seeDetail;
    console.log($scope.seeDetail);
  },

    $scope.formatage = function(){
      // $scope.nom = $scope.nom[0].toUppercase + $scope.prenom.slice(1).toLowercase().replace(' ',' ');
      $scope.nom = $scope.nom[0].toUpperCase(); $scope.prenom = $scope.prenom[0].toUpperCase();
      $scope.salaire = Intl.NumberFormat().format($scope.salaire) + ' €';
      Intl.NumberFormat().format($scope.impot) + ' €';
  }

    $scope.calculPercentage = function(){
      $scope.impot = $scope.salaire * 0.8;


    }
    $scope.franc = function(){
      

      console.log('all good');
    }






};





}());
