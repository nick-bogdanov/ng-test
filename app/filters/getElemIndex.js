app.filter('getElemIndex', function() {
    return function(data, find) {
        var obj = 0;
        data.forEach(function(elem, index) {
            if (elem && elem.id) {
                if (elem.id == find) {
                    obj = index;
                }else{
                    obj = false;
                }
            }

        });
        return obj;
    }
});