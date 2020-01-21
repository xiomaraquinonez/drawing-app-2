var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;

var clearcanvas;

var mouseClicked = false, mouseReleased = true;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
    mouseClicked = !mouseClicked;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function onMouseMove(e) {
    console.log(e.clientX)
    if (mouseClicked) {
        context.beginPath();
        context.arc(e.clientX - 290, e.clientY, 7.5, 0, Math.PI * 2, false);
        context.lineWidth = 5;
        context.strokeStyle = getRandomColor();
        context.stroke();
    }
}

window.clearcanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
