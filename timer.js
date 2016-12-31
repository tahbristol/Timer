$(function() {
    //Variables for adding and subtracking break and session times
    var minus1 = document.getElementById('minus1');
    var minus2 = document.getElementById('minus2');
    var add1 = document.getElementById('add1');
    var add2 = document.getElementById('add2');

    var breaks = document.getElementById('breaks');
    var session = document.getElementById('session');

    //Setting variables for default display
    var breakTime = 0;
    var sessionTime = 0;

    var start;
    var startBreak;


    //Break timer add and subtract
    $(add1).on('click', function() {

        breakTime++;
        $(breaks).text(breakTime);
        console.log(breakTime);

    });

    $(minus1).on('click', function() {
        if (breakTime !== 0) {
            breakTime--;
            $(breaks).text(breakTime);
            console.log(breakTime);
        }
    });
    //Duration timer add and subract
    $(add2).on('click', function() {
        sessionTime++;
        $(session).text(sessionTime);
        $('#time').text(sessionTime);
        console.log(sessionTime);
    });

    $(minus2).on('click', function() {
        if (sessionTime !== 0) {
            sessionTime--;
            $(session).text(sessionTime);
            $('#time').text(sessionTime);
            console.log(breakTime);
        }
    });


    //Start timer button
    $('#go').on('click', function() {


        //variables for minutes and seconds ==>Session Time
        var min = sessionTime;
        var seconds = 0;

        //Display the  session time in the browser
        $('#time').text("Work for: " + min + ":" + seconds);
        //Count down in seconds from set time(sessionTime)
        start = setInterval(function() {

            //To decrease the minute when seconds get to 0
            if (seconds == 0 && min !== 0) {

                seconds = 60;
                min = min - 1;
                seconds = seconds - 1;
                $('#time').text("Work for: " + min + ":" + seconds);


                //To continue decreasing the seconds, ignoring minutes
            } else if (min !== 0 && seconds !== 0) {
                seconds = seconds - 1;
                $('#time').text("Work for: " + min + ":" + seconds);
            }
            //To continue decreasing the seconds once minutes is 0
            else if (min == 0 && seconds !== 0) {
                seconds = seconds - 1;
                $('#time').text("Work for: " + min + ":" + seconds);
            }
            //If time is up, display message
            else if (min == 0 && seconds == 0) {
                $('#time').text("Work Session Over");
                clearInterval(start);
                sessionTime = 0;
                signalSession();

                //Set break cout down variables
                min = breakTime;
                seconds = 0;
                //Start break count down
                startBreak = setInterval(function() {

                    if (seconds == 0 && min !== 0) {

                        seconds = 60;
                        min = min - 1;
                        seconds = seconds - 1;
                        $('#time').text("Break for: " + min + ":" + seconds);


                        //To continue decreasing the seconds, ignoring minutes
                    } else if (min !== 0 && seconds !== 0) {
                        seconds = seconds - 1;
                        $('#time').text("Break for: " + min + ":" + seconds);
                    }
                    //To continue decreasing the seconds once minutes is 0
                    else if (min == 0 && seconds !== 0) {
                        seconds = seconds - 1;
                        $('#time').text("Break for: " + min + ":" + seconds);
                    } else if (min == 0 && seconds == 0) {
                        $('#time').text("Break Session Over");
                        breakTime = 0;
                        $(breaks).text(breakTime);
                        clearInterval(startBreak);
                        signalBreak();
                    }
                }, 1000);

            }

        }, 1000);



    });


    //Reset button
    $('#reset').on('click', function() {
        clearInterval(start);
        clearInterval(startBreak);
        $('#time').text("Enter Session");
        sessionTime = 0;
        breakTime = 0;
        $(breaks).text(breakTime);
        $(session).text(sessionTime);
        console.log('reset clicked');
    });


    var signalSession = function() {
        var signal = document.getElementById('sessionAlert');
        signal.play();

    };

    var signalBreak = function() {
        var signal = document.getElementById('breakAlert');
        signal.play();

    };


});
