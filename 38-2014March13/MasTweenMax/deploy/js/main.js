


var $rows = $(".row"),
	$columns = $(".columns"),
	$buttons = $(".button");

//1
// TweenLite.to($rows , 1, {opacity:0, delay:1});

//2
// TweenLite.from($rows , 1, {opacity:0, delay:1});

//3
// TweenMax.staggerFrom($rows , 1, {opacity:0, delay:1}, 0.2);
// TweenLite.from($buttons, 3, {rotation:360, delay:5});
// TweenLite.from($columns, 3, {rotation:360, delay:5, ease:Bounce.easeOut});
// TweenLite.from($rows, 3, {rotation:360, delay:5, ease:Bounce.easeOut});


//4
// CSSPlugin.defaultTransformPerspective = 600;
// TweenMax.staggerFrom($rows, 0.4, {
// 									opacity:0, 
// 									rotationX:-90, 
// 									transformOrigin: "center top",
// 									delay:1
// 								}, 0.2);


//5
// CSSPlugin.defaultTransformPerspective = 600;

// var tl = new TimelineMax({repeat:-1, yoyo:true});

// tl.staggerFrom($rows, 0.4, {
// 								opacity:0, 
// 								rotationX:-90, 
// 								transformOrigin: "center top",
// 								delay:1
// 							}, 0.2);

// tl.from($buttons, 1, {rotation:360});
// tl.from($columns, 1, {rotationX:360});
// tl.from($rows, 1, {rotationY:360});


//6
CSSPlugin.defaultTransformPerspective = 600;

var tl = new TimelineMax();

tl.staggerFrom($rows, 0.4, {
								opacity:0, 
								rotationX:-90, 
								transformOrigin: "center top",
								delay:1
							}, 0.2);

tl.from($buttons, 1, {rotation:360});
tl.from($columns, 1, {rotationX:360});
tl.from($rows, 1, {rotationY:360});

$("#reverse").click(function () {
	tl.reverse();
});