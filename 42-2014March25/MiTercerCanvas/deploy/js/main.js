//1
// var $canvas,
// 	canvasWidth,
// 	canvasHeight,
// 	context;

// $(function(){
// 		$canvas = $("#myCanvas");
// 		context = $canvas[0].getContext("2d");

// 		TweenMax.ticker.addEventListener("tick", dibujar);

// 		window.addEventListener("resize", hacerResize);
// 		hacerResize();
// 	}
// );

// function dibujar(event) {
// 	dibujarArcos(Math.random()*20);
// 	dibujarArcos((Math.random()*20)+170);
// 	dibujarArcos((Math.random()*20)+270);
// };

// function toDegrees (angle) {
//   return angle * (180 / Math.PI);
// };

// function toRadians (angle) {
//   return angle * (Math.PI / 180);
// };

// function hacerResize(event) {
// 	$canvas[0].width = $(window).width();
// 	$canvas[0].height = $(window).height();
// 	canvasWidth = $canvas.width();
// 	canvasHeight = $canvas.height();
// };

// function dibujarArcos(color){
// 	var radius = Math.random()*canvasWidth,
// 		startAngle = toRadians(Math.random()*360),
// 		endAngle = toRadians(Math.random()*360),
// 		counterClockwise = Math.round(Math.random()*2);

// 		context.beginPath();
// 		context.arc(canvasWidth/2, canvasHeight/2, radius, startAngle, endAngle, counterClockwise); 
// 		context.strokeStyle = "hsla("+ color +", 100%, 50%, .1)";

// 		context.lineWidth = Math.random()*50;
// 		context.stroke();
// };

//2
var canvas,
	canvasWidth,
	canvasHeight,
	context;

$(function(){
		canvas = document.getElementById('myCanvas');
		context = canvas.getContext("2d");

		TweenMax.ticker.addEventListener("tick", dibujar);

		window.addEventListener("resize", hacerResize);
		hacerResize();
	}
);

function dibujar(event) {
	// debugger;
	dibujarRectangulos( Math.random()*canvasWidth,
						Math.random()*canvasHeight, 
						Math.random()*canvasWidth, 
						Math.random()*canvasHeight, 
						Math.random()*90 );

	// for (var i = 3 - 1; i >= 0; i--) {
		dibujarCirculos( Math.random()*canvasWidth,
						 Math.random()*canvasHeight, 
						 Math.random()*canvasWidth/4, 
						 0, 
						 2 * Math.PI, 
						 false, 
						 (Math.random()*90)+270 );
	// };
};

function hacerResize(event) {
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
};

function dibujarRectangulos(posX, posY, ancho, alto, color){
	context.beginPath();
	context.rect(posX, posY, ancho, alto);
	context.lineWidth = (Math.random()*3)+1;
	context.strokeStyle = "hsla("+ color +", 50%, 50%, .7)";
	context.lineWidth = Math.random()*5;
	context.stroke();
};

function dibujarCirculos(centerX, centerY, radius, startAngle, endAngle, counterClockwise, color){
	context.beginPath();
 	context.arc(centerX, centerY, radius, startAngle, endAngle, counterClockwise); 
	context.strokeStyle = "hsla("+ color +", 50%, 50%, .7)";
	context.lineWidth = Math.random()*5;
	context.stroke();
};