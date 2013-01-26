var canvasElement = document.getElementById("game");
var canvas = canvasElement.getContext("2d");
var CANVAS_WIDTH = canvasElement.width;
var CANVAS_HEIGHT = canvasElement.height;
var itemMap = new displayItemMap(canvas);


(function() {

    window.onload = function() {
        var FPS = 60;
        setInterval(function() {
            update();
            draw();
        }, 1000/FPS);
    };
    
    functin draw(){
        function imageBuilder(context, src, posX, posY){
            var img = new Image();
            img.src = src;
            ctx.drawImage(img,posX,posY);
        }

        var backgroundSrc = "http://placekitten.com/640/480";
        var handSrc       = "http://placekitten.com/300/260";
        var personSrc     = "http://placekitten.com/400/480";

        imageBuilder(context, backgroundSrc, );
        imageBuilder(context, handSrc);
        imageBuilder(context, personSrc);

        canvas.fillStyle = "rgba(0, 0, 200, 0.1)"; // Set color to black
        canvas.fillRect(190, 0, 520, 520);
        canvas.strokeStyle= "white";
        canvas.beginPath();
        canvas.arc(500,300,200, 0, 2*Math.PI ,true);
        canvas.stroke();
    }

    function update() {
        
    }

}());
