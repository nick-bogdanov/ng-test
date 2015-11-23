app.factory('usersService', ['rfc4122', '$localStorage', function(rfc4122, $localStorage) {

    var usersFactory = {};

    var _getUsersList = function() {
        // if local storage are empty we wiil create it with default user that have my data ^_^
        if (!$localStorage.users || $localStorage.users.usersList.length == 0 ) {
            $localStorage.users = {
                "usersList": [
                    {
                        "id": rfc4122.v4(),
                        "name": "Nick Bogdanov",
                        "email": "kol9dyn4ek@gmail.com",
                        "telephone": "0953154124",
                        "address": "25/23",
                        "street": "victory",
                        "city": "Lutsk",
                        "state": "Ukraine",
                        "zip": "123456789"
                    }
                ]
            }
        }

        return $localStorage.users;

    };

    usersFactory.getUsersList = _getUsersList;

    return usersFactory;

}]);