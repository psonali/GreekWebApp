$(document).ready(function() {
    $("#lunch").hide();
    $("#dinner").hide();
    $("#aboutus").hide();
    $("#contactus").hide(); 
    $("#home").show();
});


$("#mcontactus").click(function() {
    $("#lunch").hide();
    $("#dinner").show();
    $("#aboutus").hide();
    $("#contactus").hide(); 
    $("#home").hide();
});