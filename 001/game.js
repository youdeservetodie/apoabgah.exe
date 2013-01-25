(function() {
    var canvasElement = document.getElementById("game");
    var canvas = canvasElement.getContext("2d");
    var CANVAS_WIDTH = canvasElement.width;
    var CANVAS_HEIGHT = canvasElement.height;

    window.onload = function() {
        var FPS = 60;
        setInterval(function() {
            update();
            draw();
        }, 1000/FPS);
    };

    function draw() {
        canvas.fillStyle = "rgba(0, 0, 200, 0.1)"; // Set color to black
        canvas.fillRect(190, 0, 520, 520);

        canvas.strokeStyle= "white";
        canvas.beginPath();
        canvas.arc(500,300,200, 0, (2*Math.PI)*textX/900 ,true)
        canvas.stroke()
    }

    function update() {
    }

})();
