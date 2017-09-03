$(document).ready(function () {



    // QUESTIONS
    // ===================================================================================

    // Score
    var score = {
        correct: [0],
        incorrect: [0]
    }
    

    // Question correct
    $("#correct").on('change', function () {
        score.correct++;
        console.log("Correct!");
    });
    // Question incorrect
    $("#incorrect").on('change', function () {
        score.incorrect++;
        console.log("Try Again!")
    });


    // TIMER
    // =======================================================================

    //  Set our number counter to 30.
    var number = 5;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
        intervalId = setInterval(decrement, 1000);
    }


    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
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
            alert("Times Up! You got: " + score.correct + " correct" );
        }
    }

    //  Execute the run function.
    run();






   





















});