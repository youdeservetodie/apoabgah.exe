
(function() {
    var canvasElement = document.getElementById("game");
    var canvas = canvasElement.getContext("2d");

    var mouseX = 0;
    var mouseY = 0;

    var score = 0;
    var stage = 0;


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

            if (mouseY > 220 && mouseY < 260) {
                if (mouseX > 280 && mouseX < 315) {
                    score += 1;
                }
            }
        });
    };

    function imageBuilder(context, src) {
        var img = new Image();
        img.src = src;
        return (function(posX, posY) {
            context.drawImage(img,posX,posY);
        });
    }
    function rand(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var background = imageBuilder(canvas, "firey_background.jpg");
    var person     = imageBuilder(canvas, "chained_man.png");
    var hand = [
        imageBuilder(canvas, "arm1.png"),
        imageBuilder(canvas, "arm2.png"),
        imageBuilder(canvas, "arm3.png"),
    ]

    function draw() {
        background(rand(-3,3),rand(-3, 3));
        person(rand(-10,10),rand(-10, 10));
        hand[stage](mouseX-270+rand(-1,1), mouseY-230+rand(-1,1));
    }

    function update() {
        stage = 0;
        if (score > 10 ) {
            stage = 1;
        }
        if (score > 20 ) {
            stage = 2;
        }
    }

}());
