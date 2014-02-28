// TweenLite.to(obj, 2, {properties});

// TweenLite.to("img", 20, {width: "300%", height: "30%"});
// TweenLite.to("img", 2, {x:Math.random()*700,
// 						y:Math.random()*700,
// 						rotationX:360, 
// 						rotationY:360, 
// 						scaleX: 2, 
// 						scaleY: 2});


var imgArray = $("img");

for (var i = 0; i < imgArray.length; i++) {
	TweenMax.to(imgArray[i],  2, {x:Math.random()*700,
						y:Math.random()*700,
						rotationX:Math.random()*360, 
						rotationY:Math.random()*360, 
						scaleX: Math.random()*5, 
						scaleY: Math.random()*5,
						delay: Math.random()*10,
						ease:Bounce.easeOut,
						repeat:-1, 
						yoyo:true});
};	