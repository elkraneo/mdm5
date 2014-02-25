var myGatoMono = document.getElementById('esMono');

document.addEventListener("click", function(evt){
	console.log(evt.screenX, evt.screenY);
	myGatoMono.style.top = evt.screenY + "px";
	myGatoMono.style.left = evt.screenX + "px";
	// myGatoMono.style.transform.rotationX = Math.random()*360; ????
	// document.body.style.backGroundColor = "#f00";???????

}, false);





