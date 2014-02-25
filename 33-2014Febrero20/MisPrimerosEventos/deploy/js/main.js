// window.onload = init;

// function init () {
// 	// TODO: hacer algo…
// }


// window.onclick = hablar;
// function hablar(){
// 	alert("QUE PASSSA…");
// }	


// window.onclick = mirarmeALosOjos;
// function mirarmeALosOjos(){
// 	alert("MIRANDOTE.");
// }


// window.addEventListener("click", hablar, false);
// window.addEventListener("click", mirarmeALosOjos, false);


// var a = 2;
// var b = 1948364;

// alert(sumar(23, 45));


// function sumar(a, b){
// 	var c = a + b;
// 	return c;
// }

// window.addEventListener("click", function(e){
// 	console.log(e);
// }, false);

// window.addEventListener("click", ble, false);

// function ble(evt){
// 	console.log(evt);
// }

// window.addEventListener("resize", function(e){
// 	console.log(e);
// }, false);


// window.addEventListener("mousemove", function(e){
// 	console.log(e);
// }, false);







var myTextVar = document.getElementById('myText');

myTextVar.addEventListener("keypress", function(evt){
	console.log(String.fromCharCode(evt.keyCode));
}, false);





