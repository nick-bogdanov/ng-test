app.controller('usersListCtrl', [
    '$scope',
    '$localStorage',
    'usersService',
    '$filter',
    function($scope, $localStorage, usersService, $filter) {

    $scope.menuItem = 'list';

    $scope.users = usersService.getUsersList().usersList;

    $scope.editUser = function(uuid) {
        $filter('getElemIndex')(uuid);
    };

    $scope.removeUser = function(uuid) {
        var index = $filter('getElemIndex')($scope.users, uuid);
        $scope.users.splice(index, 1);
    }

}]);