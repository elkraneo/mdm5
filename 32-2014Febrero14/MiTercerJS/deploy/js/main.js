//***************** My FruityCrush v0.4 ***************** 
// window.onload = init;

// var frutas = ["papaya", "pera", "manzana", "mango", "platano", "maracuya", "lichi", "mandarina", "coco"];

// var filas = 7;
// var columnas = 7;

// function init() {
// 	console.log(crearNivel());
// }

// function frutaAlAzar() {
// 	var randomIndex = Math.random() * (frutas.length - 1);
// 	var randomIndexRounded = Math.round(randomIndex);
// 	return frutas[randomIndexRounded];
// }

// function filaDeFruta() {
// 	var filaDeFrutasArr = [];
// 	var myGameScreen = document.getElementById('myGameScreen');

// 	for (var i = 0; i < filas; i++) {
// 		filaDeFrutasArr.push(frutaAlAzar());
		
// 		var miImagenDeFruta = document.createElement("article");
// 		miImagenDeFruta.setAttribute("class", filaDeFrutasArr[i]);
// 		myGameScreen.appendChild(miImagenDeFruta);
// 	};
// 	return filaDeFrutasArr;
// }

// function crearNivel() {
// 	var nivelArr = [];

// 	for (var i = 0; i < columnas; i++) {
// 		nivelArr.push(filaDeFruta());
// 	};
// 	return nivelArr;
// }

//***************** My FruityCrush v0.5 ***************** 
// window.onload = init;
$(document).ready(function(){
	init();
});

var frutas = ["papaya", "pera", "manzana", "mango", "platano", "maracuya", "lichi", "mandarina", "coco"];

var filas = 7;
var columnas = 7;

function init() {
	console.log(crearNivel());
}

function frutaAlAzar() {
	var randomIndex = Math.random() * (frutas.length - 1);
	var randomIndexRounded = Math.round(randomIndex);
	return frutas[randomIndexRounded];
}

function filaDeFruta() {
	var filaDeFrutasArr = [];
	var myGameScreen = document.getElementById('myGameScreen');

	for (var i = 0; i < filas; i++) {
		filaDeFrutasArr.push(frutaAlAzar());
		
		 var miImagenDeFruta = document.createElement("article");
		 miImagenDeFruta.setAttribute("class", filaDeFrutasArr[i]);
		 myGameScreen.appendChild(miImagenDeFruta);

		// $("#myGameScreen ul:nth-child(1)").add("article");
	};
	return filaDeFrutasArr;
}

function crearNivel() {
	var nivelArr = [];

	for (var i = 0; i < columnas; i++) {
		nivelArr.push(filaDeFruta());
	};
	return nivelArr;
}





