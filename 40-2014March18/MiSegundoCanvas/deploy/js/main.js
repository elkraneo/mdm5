// 1
// var $canvas,
// 	context;

// $(function(){
// 		$canvas = $("#myCanvas")[0];
// 		context = $canvas.getContext("2d");

// 		TweenMax.ticker.addEventListener("tick", myFunction);

// 		context.beginPath();
// 		context.moveTo(100, 150);
// 		context.lineTo(450, 50);
// 		context.lineWidth = 15;

// 		context.strokeStyle = "#ff0000";
// 		context.stroke();
// 	}
// );


//  function myFunction(event) {
//      //executes on every tick after the core engine updates
//      console.log(event);
//  };


// 2
// var $canvas,
// 	canvasWidth,
// 	canvasHeight,
// 	context;

// $(function(){
// 		$canvas = $("#myCanvas");
// 		canvasWidth = $canvas.width();
// 		canvasHeight = $canvas.height()
// 		context = $canvas[0].getContext("2d");

// 		// TweenMax.ticker.fps(5);
// 		TweenMax.ticker.addEventListener("tick", myFunction);
// 	}
// );


// function myFunction(event) {
// 		context.beginPath();
// 		context.moveTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
// 		context.lineTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
// 		context.lineWidth = Math.random()*150;
// 		context.lineCap = "round";

// 		context.strokeStyle = "hsla("+ Math.random()*360 +", 100%, 50%, "+ Math.random()*1 +")";
// 		context.stroke();
// };


// 3
// var $canvas,
// 	canvasWidth,
// 	canvasHeight,
// 	context;

// $(function(){
// 		$canvas = $("#myCanvas");
// 		canvasWidth = $canvas.width();
// 		canvasHeight = $canvas.height()
// 		context = $canvas[0].getContext("2d");

	


// 		// TweenMax.ticker.fps(5);
// 		TweenMax.ticker.addEventListener("tick", myFunction);
// 	}
// );


// function myFunction(event) {
// 	var radius = Math.random()*canvasWidth,
// 			startAngle = toRadians(Math.random()*360),
// 			endAngle = toRadians(Math.random()*360),
// 			counterClockwise = false;

// 			context.beginPath();
// 			context.arc(canvasWidth/2, canvasHeight/2, radius, startAngle, endAngle, counterClockwise); 
// 			context.strokeStyle = "hsla("+ Math.random()*360 +", 100%, 50%, "+ Math.random()*1 +")";
// 			context.lineCap = "round";
// 			context.lineWidth = Math.random()*15;
// 			// context.moveTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
// 			// context.lineTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
// 			context.stroke();

// };

// function toDegrees (angle) {
//   return angle * (180 / Math.PI);
// }

// function toRadians (angle) {
//   return angle * (Math.PI / 180);
// }


//4
var $canvas,
	canvasWidth,
	canvasHeight,
	context;

$(function(){
		
		$canvas = $("#myCanvas");
		$canvas[0].width = $(window).width();
		$canvas[0].height = $(window).height();
		canvasWidth = $canvas.width();
		canvasHeight = $canvas.height()
		context = $canvas[0].getContext("2d");

	


		// TweenMax.ticker.fps(5);
		TweenMax.ticker.addEventListener("tick", myFunction);
	}
);


function myFunction(event) {
	var radius = Math.random()*canvasWidth,
			startAngle = toRadians(Math.random()*360)
			endAngle = toRadians(Math.random()*360),
			counterClockwise = Math.round(Math.random()*2);

			context.beginPath();
			context.arc(canvasWidth/2, canvasHeight/2, radius, startAngle, endAngle, counterClockwise); 
			context.strokeStyle = "hsla("+ ((Math.random()*100)+100) +", 100%, 50%, 1)";
			// context.lineCap = "round";
			context.lineWidth = Math.random()*50;
			// context.moveTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
			// context.lineTo(Math.random()*canvasWidth, Math.random()*canvasHeight);
			context.stroke();

};


function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}