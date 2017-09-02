$(document).ready(function () {

    console.log("hello console!");


    var clock = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    }

    // Question 1
    $( "#correct1" ).on('change',function() {
        alert( "Correct!" );
    
    });

    // Question 2
    $( "#correct2" ).on('change',function() {
        alert( "Correct!" );
    
    });

    // Question 3
    $( "#correct3" ).on('change',function() {
        alert( "Correct!" );
    
    });

    // Question 4
    $( "#correct4" ).on('change',function() {
        alert( "Correct!" );
    
    });



















});