app.controller('editUserCtrl', [
    '$scope',
    '$controller',
    '$stateParams',
    '$filter',
    '$localStorage',
    '$window',
    function($scope, $controller, $stateParams, $filter, $localStorage, $window) {

        $controller('createUserCtrl', {$scope: $scope}); //Extend controller for validating form

        var index = $filter('getElemIndex')($localStorage.users.usersList, $stateParams.id); // extract user from local storage

        // if url broken redirecting to users list
        if (index === false) {
            $window.location = "#list";
        }

        var user = $localStorage.users.usersList[index]; // our user that will be editing

        $scope.menuItem = null; // We not need active menu
        $scope.user = {};
        // We nedd this for show different button text
        $scope.create = false;
        $scope.edit = true;

        angular.extend($scope.user, user ); // fill form

        $scope.createUser = function() {
            $scope.submitted = true; // show form errors after submit

            $scope.existEmail = $filter('existValue')($localStorage.users.usersList, $scope.user.email, 'email', index);
            $scope.existPhone = $filter('existValue')($localStorage.users.usersList, $scope.user.telephone, 'telephone', index);

            if ($scope.userForm.$valid && $scope.existEmail && $scope.existPhone) {

                angular.extend($localStorage.users.usersList[index], $scope.user);

                //$scope.user = ""; // clear form
                $scope.userForm.$setPristine();
                $scope.submitted = false;

                //alert('User has been created successfully');

            }

        }

}]);