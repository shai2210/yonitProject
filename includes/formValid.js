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
 
    else return true;
}
$( document ).ready(function() {
    var submit = $('.submit');
    submit.click(function() {
        if(validateForm()){
             location.href = 'http://shenkar.html5-book.co.il/2016-2017/html5/dev_227/index.html';
        }
    });
});