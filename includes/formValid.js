/**
 * @author shai
 */
function validateForm() {
    var x = document.forms["regsForm"]["fName"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    var x = document.forms["regsForm"]["lName"].value;
    if (x == "") {
        alert("Last name must be filled out");
        return false;
    }
    var x = document.forms["regsForm"]["class"].value;
    if (x == "") {
        alert("Class must be filled out");
        return false;
    }
    var x = document.forms["regsForm"]["school"].value;
    if (x == "") {
        alert("School must be filled out");
        return false;
    }
    var x = document.forms["regsForm"]["city"].value;
    if (x == "") {
        alert("City must be filled out");
        return false;
    }
}