/**
 * @author shai
 */
$(document).ready(function() {
	
	 var dataString2 = "id=13&func=A";

    $.ajax({
        type: 'POST',
        url: 'server.php',
        data: dataString2,
        dataType: "json",
        success: function(data) {
            var d = data['url'],
                p = "<img src= " + d + " />",
                n = data['name'];
            $(".kid2").append(p);
            $(".name").append(n);
         
        }
    });
    $("#getBooks").click(function() {
        $.ajax({
            url: 'includes/books.json',
            dataType: 'json',
            success: function(data) {
                $(".data").empty();
                for (var i = 0; i < data['book'].length; i++) {
                    $(".data").append('<img src=" ' + data['book'][i].url + '">');
                }
            },
            error: function(request, status, error) {
                console.log('error', error);
            }
        });
    });


    $("#getClass").click(function() {
        var dataString1 = "id=1&func=P";

        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString1,

            success: function(data) {

                $(".data").empty();
                $(".data").append(data);
            }
        });
    });
    
});