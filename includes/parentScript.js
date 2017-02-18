/**
 * @author shai
 */
$(document).ready(function() {

    var dataString1 = "id=1&func=A";
    var dataString2 = "id=1&func=B";

    $.ajax({
        type: 'POST',
        url: 'server.php',
        data: dataString1,
        dataType: "json",
        success: function(data) {
            var d = data['url'],
                p = "<img src= " + d + " />",
                n = data['name'];
            $(".parent").append(p);
            $(".name").append(n);
            bringChilds();
        }
    });
$("#mangeLibrary").click(function() {
        $.ajax({
            url: 'includes/books.json',
            dataType: 'json',
            success: function(data) {
                $("main").empty();
                
                    $("main").append('<img src=" ' + data['book'][2].url + '"style=border:none;border-radius:0px;padding-left:15px;' +'>');
                    $("main").append('<img src=" ' + data['book'][3].url + '"style=border:none;border-radius:0px;padding-left:15px;' +'>');
                
            },
            error: function(request, status, error) {
                console.log('error', error);
            }
        });
    });
    $("#readingRecomends").click(function() {
        $.ajax({
            url: 'includes/books.json',
            dataType: 'json',
            success: function(data) {
                $("main").empty();
                
                    $("main").append('<img src=" ' + data['book'][0].url + '"style=border:none;border-radius:0px;padding-left:15px;' +'>');

                
            },
            error: function(request, status, error) {
                console.log('error', error);
            }
        });
    });
    var bringChilds = function() {
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString2,
            dataType: "json",
            success: function(data) {
                var kid1 = data[0]['child_url'],
                    book1 = data[0]['book_url'],
                    kid2 = data[1]['child_url'],
                    book2 = data[1]['book_url'];
                $('.kid1').attr('src', kid1);
                $('.kid2').attr('src', kid2);
                $('#book1').attr('src', book1);
                $('#book2').attr('src', book2);
            }
        });
    };
});