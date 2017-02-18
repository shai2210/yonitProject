
/**
 * @author shai
 */
$(document).ready(function() {

    $("#teacher-form").hide();
 var dataString2 = "id=6&func=A";

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
    $("#add-student").click(function() {
        var dataString = "func=S";
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString,
            success: function(data) {
                $("#student-select").remove();
                $("#teacher-form").show();
                $('table').remove();
                $(data).insertAfter(".label-add");
            },
            error: function(request, status, error) {
            console.log('error', error);
            }
        });
    });



    $("#show-students").click(function() {
        var dataString = "func=D";
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString,
            success: function(data) {
                $('table').remove();
                $("#teacher-form").hide();
                $("#student-select").remove();
                $("main").append(data);
            },
            error: function(request, status, error) {
                console.log('error', error);
            }
        });
    });


    $("#submit-student").click(function() {
        var student_id = $("#student-select" ).val();
        var dataString = "func=T&id=" + student_id;
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString,
            success: function(data) {
                document.getElementById("show-students").click();
            },
            error: function(request, status, error) {
                document.getElementById("show-students").click();
            }
        });
    });

});
