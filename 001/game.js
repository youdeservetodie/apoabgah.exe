/*
 * Tasks:
 *   Add game object
 *   Add item render functions
 *   Add motion logic
 *   Bind motion to render
 **/

var displayItemMap = (function(canvasContext) {

    var displayItemMap = (function() {
        var self=this;
        self.canvasContext = canvasContext;
        self._items = { };
        /*  self.items are like this:
          {
              "genericObject" : {
                  contextInjector: function() { ... },
                  zIndex: 0..n, // (ints/floats)
              }
          }
         */
    });

    displayItemMap.prototype.add = (function(name, contextFunction, zIndex) {
        var self=this;
        zIndex = zIndex || 0;
        if ("undefined" !== typeof self._items[name]) {
            self._items[name] = {
                contextInjector: contextFunction,
                zIndex: zIndex
            };
        }
    });

    displayItemMap.prototype.remove = (function(name) {
        var self=this;

        delete self._items[name];
    });

    displayItemMap.prototype.render = (function(name) {
        var self=this;
        var context = self.canvasContext;
        var displayItem = self._items[name];
        
        displayItem.contextFunction();
    });

    return new displayItemMap(canvasContext);
}());


(function() {
    var game = function() {
        var self=this;
    };

    game.prototype.foo = function() {
        
    };
}());


displayItemMap.add(
    "gameBoard", 
    function(canvas, motion, style) {
        canvas.fillStyle = "rgba(0, 0, 200, 0.1)"; // Set color to black
        canvas.fillRect(190, 0, 520, 520);
    }
);

displayItemMap.add(
    "playBoundry",
    function(canvas, motion, style) {
        canvas.strokeStyle= "white";
        canvas.beginPath();
        canvas.arc(500,300,200, 0, 2*Math.PI ,true);
        canvas.stroke();
    }
);


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

    //TODO object this into own thing, make it know of self.canvas
    var displayItemMap;


    //TODO: This doesn't keep track of z-index order.
    function draw(displayItemMap) {
        var item;
        for (item in displayItemMap) {
            if (displayItemMap.hasOwnProperty(item)) {
               item.render();
            }
        }
    }

    function update() {

    }

})();
