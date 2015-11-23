app.controller('createUserCtrl', [
    '$scope',
    'rfc4122',
    '$localStorage',
    '$filter',
    function($scope, rfc4122, $localStorage, $filter) {

        $scope.emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        $scope.onlyNumbers = /^\d+$/;
        $scope.create = true;
        $scope.edit = false;
        $scope.menuItem = 'create'; // active menu
        $scope.submitted = false; // we will validate form after user send data
        $scope.existEmail = true;
        $scope.existPhone = true;

        $scope.createUser = function() {

            $scope.submitted = true; // show form errors after submit

            // check email and phone number if they exist
            $scope.existEmail = $filter('existValue')($localStorage.users.usersList, $scope.user.email, 'email');
            $scope.existPhone = $filter('existValue')($localStorage.users.usersList, $scope.user.telephone, 'telephone');

            // if form is valid and email with phone address not exist we will create user
            if ($scope.userForm.$valid && $scope.existEmail && $scope.existPhone) {

                var user = {};

                angular.extend(user, $scope.user);
                user.id = rfc4122.v4();

                $localStorage.users.usersList.push(user); // add new user to localStorage

                $scope.user = ""; // clear form
                $scope.userForm.$setPristine();
                $scope.submitted = false;

                alert('User has been created successfully');

            }

        }

}]);