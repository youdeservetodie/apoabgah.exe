var canvasElement = document.getElementById("game");
var canvas = canvasElement.getContext("2d");
var CANVAS_WIDTH = canvasElement.width;
var CANVAS_HEIGHT = canvasElement.height;


(function() {

    window.onload = function() {
        var FPS = 60;
        setInterval(function() {
            update();
            draw();
        }, 1000/FPS);
    };
    
    function imageBuilder(context, src){
        var img = new Image();
        img.src = src;
        return (function(posX, posY) {
            context.drawImage(img,posX,posY);
        });
    }

    var background = imageBuilder(canvas, "http://placekitten.com/640/480");
    var hand       = imageBuilder(canvas, "http://placekitten.com/300/260");
    var person     = imageBuilder(canvas, "http://placekitten.com/400/480");

    function draw() {

        background(0,0);
        hand(0, 0);
        person(0, 0);
    }

    function update() {
       
    }

}());
