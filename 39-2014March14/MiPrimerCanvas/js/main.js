var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(100, 150);
context.lineTo(450, 50);
context.lineTo(150, 300);
context.lineTo(550, 300);

context.lineWidth = 35;
context.strokeStyle = "hsla(170, 50%, 50%, .3)";
context.lineCap = "round"; /* [square, butt, round] */
context.stroke();