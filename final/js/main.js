var $body = $('body');
var $mario = $('.mario');
var $runMario = $('.runningMan');

var $first;

var handle;

var state = 0;

var x = 0;

function move() {

    $body.css("background-position-x", x -= 1)

}


function togle() {

    $runMario.toggleClass('runningMan');
    $mario.toggleClass("hidden");

}

$body.on('keydown', function (event) {

    if (state === 0) {

        if (event.which === 39) {


            handle = setInterval(move, 20);
            togle();

            state = 1;

        }

    }

});
$body.on('keyup', function (event) {

    if (state === 1) {

        if (event.which === 39) {

            clearInterval(handle);
            $runMario.toggleClass('runningMan');
            $mario.toggleClass("hidden");

            state = 0;
        }

    }

})

$body.on('keypress', function (event) {
    if (event.which === 32) {

        $runMario.css('bottom', 250);
        $mario.css('bottom', 250);
    }

    console.log(event.which);

});

$body.on('keyup', function () {

    if (event.which === 32) {

        $runMario.css('bottom', 165);
        $mario.css('bottom', 165);
    }
})

