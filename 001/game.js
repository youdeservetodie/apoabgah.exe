(function() {

    var canvasElement = document.getElementById("game");
    var canvas = canvasElement.getContext("2d");

    var CANVAS_WIDTH = canvasElement.width;
    var CANVAS_HEIGHT = canvasElement.height;

    var textX = 50;
    var textY = 50;
    var velocityX = 5;

    window.onload = function() {
      var FPS = 60;
      setInterval(function() {
        update();
        draw();
      }, 1000/FPS);
    };

    function draw() {
      canvas.fillStyle = "white"; // Set color to black
      canvas.fillText(textX +". " + textY, textX, textY);

      canvas.fillStyle = "rgba(0, 0, 200, 0.1)"; // Set color to black
      canvas.fillRect(190, 0, 520, 520);

      canvas.strokeStyle= "white";
      canvas.beginPath();
      canvas.arc(500,300,200, 0, (2*Math.PI)*textX/900 ,true)
      canvas.stroke()
    }

    function update() {
      textX += velocityX;
      textY = Math.floor(Math.cos(textX/50)*textX/10 + 150);
      if (textX > 900 || textX < 0){ 
        velocityX *= -1;
      }
    }

})();
