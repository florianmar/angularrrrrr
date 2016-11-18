(function() {
  'use strict';

    angular.module('appUsers',[])
            .controller('UsersCtrl', UsersCtrl);


            function UsersCtrl($scope){
              console.log('scope chargée');

              $scope.users = [

                  {
                    nom: 'Marin',
                    prenom:'Flo',
                    age:32,
                    ville:'Lyon',
                    sexe:true,
                    img:'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/18/13/18369683.jpg'
                  },
                  {
                    nom: 'Guy',
                    prenom:'Elodie',
                    age:28,
                    ville:'marseille',
                    sexe:false,
                    img:'https://superbobine.files.wordpress.com/2013/05/rrrrrrr2.jpg'
                  },
                  {
                    nom: 'laloa',
                    prenom:'Milford',
                    age:35,
                    ville:'paris',
                    sexe:true,
                    img:'http://fr.web.img4.acsta.net/videothumbnails/15/03/05/15/07/193467.jpg'
                  },
                  {
                    nom: 'Casol',
                    prenom:'tibo',
                    age:40,
                    ville:'Dam',
                    sexe:true,
                    img:'data:image/jpeg;base64,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'
                  }



              ];
/*
function message(text){
  alert(text)
}

message('laaaaa')
message('okkk');
*/

              $scope.removeUser = function(user){
                  console.log(user);
                 var position = $scope.users.indexOf(user);
                 console.log(position);
                  $scope.users.splice(position,1);
                }

              $scope.ajouterUser = function(){
                console.log('formulaire envoyé');
                $scope.users.push(
                {
                    nom:$scope.nom,
                    prenom:$scope.prenom,
                    sexe:$scope.sexe,
                    age:$scope.age,
                    ville:$scope.ville,
                    img:$scope.img,

                });
                $scope.nom = '';
                $scope.prenom = '';
                $scope.sexe = '';
                $scope.age = '';
                $scope.ville = '';
                $scope.img = '';

              }

            }


/**
* Exercice 2
*/

/*
*
* Exercice: Créer un bouton par utilisateur pour pouvoir supprimer
* un utilisateur
*
* Afficher le sexe par utilisateur: Homme ou Femme
* + Ajouter un Avatar (url d'image) par utilisateur lors de l'affichage des utilisateurs
et de la création d'utilisateur (ng-src). Valider par un blur que la photo soit gif
*
* + Créer une liste déroulante perùetant de trier par age avec 2 options:
    - Le plus Jeune
    - Le plus Vieux

   AU changement d'item selectionné, cela me trie le tableau du plus jeune au plus vieux OU
   		du plus vieux au plus jeune

  + Ajouter une checkbox pour voir apparaitre que les utilisateurs majeur quand elle est cochés

  + Ajouter 3 bouttons radios Paris - Lyon  - Marseille pour filtrer les utilisateurs par ville
  et un boutton "Toutes les villes" pour voir tout les utilisateurs

  + Ajouter par utilisateur un tableaux de Sports (au choix: Foot, Basket Baseball,Rugby, Handball )
    PuisCréer


  + Ajouter 10 utilisateurs dans votre liste d'utilisateurs puis
  	créer un input range (ou range slider en jquery/angular)
    pour limiter le nombre d'utilisateurs

  + Ajouter les coordonées ongitude et latitude dans un objet "coords" PAR utilisateurs
    et placer les utilisateurs sur une Google Map tuto: https://openclassrooms.com/courses/google-maps-javascript-api-v3
    ou module en AngularJS


    Bonus: Décliner le meme exercice mais en chargeant l'API de JsonPlaceholder
    sous l'url: https://jsonplaceholder.typicode.com/users
    Pour cela, voir comment utliser l'objet $http



  NB: ****Breaking News**** VOUS POUVEZ UTILISER LA LIBRAIRIES JS "LODASH" pour toutes vos traitementd e tableaux , objets...*/



  /*********************************************************************************************/







}());
