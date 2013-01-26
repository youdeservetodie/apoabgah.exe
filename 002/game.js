
(function() {
    var canvasElement = document.getElementById("game");
    var canvas = canvasElement.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;



    var score = 0;

    window.onload = function() {
        var FPS = 60;
        setInterval(function() {
            update();
            draw();
        }, 1000/FPS);
        window.addEventListener("click", function(event) {
            var coords = canvasElement.relMouseCoords(event);
            mouseX = coords.x;
            mouseY = coords.y;
        });
    };

    function imageBuilder(context, src) {
        var img = new Image();
        img.src = src;
        return (function(posX, posY) {
            context.drawImage(img,posX,posY);
        });
    }

    var background = imageBuilder(canvas, "http://placekitten.com/640/480");
    var person     = imageBuilder(canvas, "http://placekitten.com/400/480");
    var hand       = imageBuilder(canvas, "http://placekitten.com/300/260");

    function draw() {
        background(0,0);
        person(0, 0);
        hand(mouseX, mouseY);
    }

    function update() {
    }

}());
