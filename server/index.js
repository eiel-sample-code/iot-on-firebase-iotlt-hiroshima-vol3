var firebase = require("firebase");
firebase.initializeApp({
    databaseURL: "https://iot-sample-2450c.firebaseio.com"
});

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(13);
    led.off();

    firebase.database().ref("switch").on('value', function(sw) {
        buttonState = sw.val();
        if (buttonState) {
            led.on();
        } else {
            led.off();
        }
    });
});

