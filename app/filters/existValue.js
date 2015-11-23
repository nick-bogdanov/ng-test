app.filter('existValue', function() {
    return function(data, find, key, skip) {
        var result = false;

        for (var i = 0; i < data.length; i++) {
            // if we edit user we should skip current object
            if (skip) {
                if (i == skip) {
                    continue;
                }
            }

            if (data[i][key] == find) {
                result = false;
                break;
            }else{
                result = true;
            }

        }

        return result;
    }
});