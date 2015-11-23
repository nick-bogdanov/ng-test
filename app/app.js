'use strict';

var app = angular.module('users', [
  'ui.router',
  'ngStorage',
  'uuid'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state("list", {
      url: "/list",
      templateUrl: "app/views/list.html",
      controller: "usersListCtrl"
    })

    .state("create", {
      url: "/create",
      templateUrl: "app/views/createUser.html",
      controller: "createUserCtrl"
    })

    .state("edit", {
      url: "/edit/:id",
      templateUrl: "app/views/createUser.html",
      controller: "editUserCtrl"
    });

  $urlRouterProvider.otherwise('/list');

});

app.run(['$rootScope', '$localStorage', function($rootScope, $localStorage) {



}]);
