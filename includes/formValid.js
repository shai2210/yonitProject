/**
 * @author shai
 */

function validateForm() {
    var x = document.forms["regsForm"]["fName"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    var y = document.forms["regsForm"]["pass"].value;
    if (y == "") {
        alert("Pass must be filled out");
        return false;
    }
    var z = document.forms["regsForm"]["passConfirm"].value;
    if (z == "" || z!=y) {
        alert("Return on password");
        return false;
    }
     var w = document.forms["regsForm"]["email"].value;
    if (w == "") {
        alert("Email must be filled out");
        return false;
            	 

    }
    else
    {
    	
    	  var name= document.forms["regsForm"]["fName"].value;
    	   var url= document.forms["regsForm"]["email"].value;
    	   var type = document.forms["regsForm"]["type"].value;
    	   var dataString1 =  "func=U&name=" + name +"&url=" + url +"&type="+type;
    	 debugger;
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: dataString1,
            dataType: "json",
            success: function(data) {
            	debugger;
            	console.log(data);
            }
            	});
    	return true;
    } 
}
$( document ).ready(function() {
    var submit = $('.submit');
    submit.click(function() {
        if(validateForm()){
             location.href = 'index.html';
        }
    });
    
    
});