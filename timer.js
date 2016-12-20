$(function() {

    var minus1 = document.getElementById('minus1');
    var minus2 = document.getElementById('minus2');
    var add1 = document.getElementById('add1');
    var add2 = document.getElementById('add2');

    var breaks = document.getElementById('breaks');
    var session = document.getElementById('session');

    var breakTime = 0;
    var sessionTime = 0;



    $(add1).on('click', function() {
        breakTime++;
        $(breaks).text(breakTime);
        console.log(breakTime);
    });

    $(minus1).on('click', function() {
        breakTime--;
        $(breaks).text(breakTime);
        console.log(breakTime);
    });

    $(add2).on('click', function() {
        sessionTime++;
        $(session).text(sessionTime);
        console.log(sessionTime);
    });

    $(minus2).on('click', function() {
        sessionTime--;
        $(session).text(sessionTimer);
        console.log(breakTime);
    });



    $('#go').on('click', function() {


        function myTimer() {

            while ($('#time').text() !== 0) {
                setTimeOut(1000, function() {
                    var stopWatch = $('#time').text();
                    stopWatch--;
                    $('#timer').text(stopWatch);
                });
            }
            $('#time').text(forTimer);
        }
    });

});
