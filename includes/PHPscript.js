/**
 * @author shai
 */
// require 'new.php';
$( document ).ready(function() {
	   var path;
        // var userId = $("input[name=userId]").val();
        //var user = $("select[name=user]").val();
        var dataString = "id=1&func=A";
        // console.log(userId + "  " + user);
        $.ajax({
            type: 'POST',
            url: 'new.php',
            data: dataString,
            cache: true,
            success: function(data){ 
            	console.log(data);               
			$(".parent").append(data);
			$(".name").append("שי");
            }
        });
   
	
	$(".kid1").append("<img src=images/me.gif alt=parent/>");
});