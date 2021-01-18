
$.ajax({
    url: 'https://itunes.apple.com/search?term=rihanna',
    type: 'GET',
    dataType: 'xml/html/script/json',
    success: function (data, textStatus, jqXHR) {
        console.log(data)
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // error callback
    }
});


