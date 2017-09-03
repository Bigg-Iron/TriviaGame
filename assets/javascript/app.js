$(document).ready(function () {

    // TIMER
    // =======================================================================

    //  Set our number counter to 100.
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#countdown").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stop();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }

    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    //  Execute the run function.
    run();






    // Questions
    // ===================================================================================

    // Question 1 correct
    $("#correct1").on('change', function () {
        alert("Correct!");
    });
    // Question 1 incorrect
    $("#incorrect1").on('change', function () {
        console.log("Try Again!")
    });



    // Question 2
    $("#correct").on('change', function () {
        alert("Correct!");
    });


    // Question 3
    $("#correct3").on('change', function () {
        alert("Correct!");

    });

    // Question 4
    $("#correct4").on('change', function () {
        alert("Correct!");

    });






















});