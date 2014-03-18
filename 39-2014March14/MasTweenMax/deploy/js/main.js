

//1
// var $rows = $(".row"),
// 	$columns = $(".columns"),
// 	$buttons = $(".button"),
// 	$progressRange = $("input[type='range']");


// CSSPlugin.defaultTransformPerspective = 600;

// var miTimeline = new TimelineMax( {onUpdate:showUpdate} );

// miTimeline.staggerFrom($rows, 0.4, {
// 								opacity:0, 
// 								rotationX:-90, 
// 								transformOrigin: "center top",
// 								delay:1
// 							}, 0.2);

// miTimeline.from($buttons, 1, {rotation:360}, "laParteDeLosBotones");
// miTimeline.from($columns, 1, {rotationX:360});
// miTimeline.from($rows, 1, {rotationY:360});

// $("#reverse").click(function () {
// 	miTimeline.reverse();
// });

// $("#irBotones").click(function () {
// 	miTimeline.play("laParteDeLasColumnas").pause();
// });


// $progressRange.change(function(event) {
// 	miTimeline.progress(this.value/100).pause();

// 	console.log("$progressRange value:", this.value);
// });


// function showUpdate() {
// 	var miTimelineProgress = miTimeline.progress();
// 	$progressRange.val( miTimelineProgress * 100);

// 	console.log("miTimelineProgress value:", miTimelineProgress);
// }



//2
// var $rows = $(".row"),
// 	$columns = $(".columns"),
// 	$buttons = $(".button"),
// 	$progressRange = $("input[type='range']");


// CSSPlugin.defaultTransformPerspective = 600;

// var miTimeline = new TimelineMax( {onUpdate:showUpdate} );

// miTimeline.add( TweenMax.staggerFrom($rows, 0.4, {
// 								opacity:0, 
// 								rotationX:-90, 
// 								transformOrigin: "center top",
// 								delay:1
// 							}, 0.2));

// miTimeline.add(TweenMax.from($buttons, 1, {rotation:360}));
// miTimeline.add(TweenMax.from($columns, 1, {rotationX:360}), "laParteDeLasColumnas");
// miTimeline.add(TweenMax.from($rows, 1, {rotationY:360}));
// // miTimeline.add("laParteDeLosBotones", 5.2);

// $("#reverse").click(function () {
// 	miTimeline.reverse();
// });

// $("#irBotones").click(function () {
// 	miTimeline.play("laParteDeLasColumnas");
// 	// miTimeline.reverse("laParteDeLasColumnas");
// });


// $progressRange.change(function(event) {
// 	miTimeline.progress(this.value/100).pause();

// 	console.log("$progressRange value:", this.value);
// });


// function showUpdate() {
// 	var miTimelineProgress = miTimeline.progress();
// 	$progressRange.val( miTimelineProgress * 100);

// 	console.log("miTimelineProgress value:", miTimelineProgress);
// }

//3
var $rows = $(".row"),
	$columns = $(".columns"),
	$buttons = $(".button"),
	$progressRange = $("#playHead"),
	$timeScale = $("#timeScale");


CSSPlugin.defaultTransformPerspective = 600;

var miTimeline = new TimelineMax( {onUpdate:showUpdate, repeat:-1} );

miTimeline.add( TweenMax.staggerFrom($rows, 0.4, {
								opacity:0, 
								rotationX:-90, 
								transformOrigin: "center top",
								delay:1
							}, 0.2));

miTimeline.add(TweenMax.from($buttons, 1, {rotation:360}));
miTimeline.add(TweenMax.from($columns, 1, {rotationX:360}), "laParteDeLasColumnas");
miTimeline.add(TweenMax.from($rows, 1, {rotationY:360}));

$("#reverse").click(function () {
	miTimeline.reverse();
});

$("#irBotones").click(function () {
	miTimeline.play("laParteDeLasColumnas");
});

$progressRange.change(function(event) {
	miTimeline.progress(this.value/100).pause();
});

$timeScale.change(function(){
	miTimeline.timeScale(this.value/100);
});

function showUpdate() {
	var miTimelineProgress = miTimeline.progress();
	$progressRange.val( miTimelineProgress * 100);
	// console.log("miTimelineProgress value:", miTimelineProgress);
}


