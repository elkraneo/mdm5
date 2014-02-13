// var myArray = ["platano", "kiwi"];

// function myFunction (fruta) {
// 	myArray.push(fruta);
// };



// myFunction("pera");
// console.log(myArray);


//***************** My FruityCrush v0.1 ***************** 
// var frutas = ["papaya", "pera", "manzana", "mango", "platano", "maracuya", "lichi", "mandarina", "coco"];

// var frutaAlAzar;

// function frutaRandom() {
// 	var numAlAzar = Math.random() * (frutas.length -1);
// 	var numAlAzarRedondeado = Math.round(numAlAzar);
// 	frutaAlAzar = frutas[numAlAzarRedondeado];
// }

// function filaDeFruta() {
// 	var fila = [];
// 	for (var i = 0; i < 7; i++) {
// 		frutaRandom();
// 		fila.push(frutaAlAzar)
// 	};
// 	console.log(fila);
// }

// filaDeFruta();

//***************** My FruityCrush v0.2 ***************** 
// var frutas = ["papaya", "pera", "manzana", "mango", "platano", "maracuya", "lichi", "mandarina", "coco"];

// function frutaRandom() {
// 	var numAlAzar = Math.random() * (frutas.length -1);
// 	var numAlAzarRedondeado = Math.round(numAlAzar);
// 	return(frutas[numAlAzarRedondeado]);
// };

// function filaDeFruta() {
// 	var fila = [];
// 	for (var i = 0; i < 7; i++) {
// 		fila.push(frutaRandom());
// 	}
// 	return(fila);
// };

// // filaDeFruta();

// function newLevel(){
// 	var level = [];
// 	for (var i = 0; i < 7; i++) {
// 		level.push(filaDeFruta());
// 	}
// 	console.log(level);
// };

// newLevel();

//***************** My FruityCrush v0.3 ***************** 
var frutas = ["papaya", "pera", "manzana", "mango", "platano", "maracuya", "lichi", "mandarina", "coco"];

function frutaRandom() {
	var numAlAzar = Math.random() * (frutas.length -1);
	var numAlAzarRedondeado = Math.round(numAlAzar);
	return(frutas[numAlAzarRedondeado]);
};

function filaDeFruta() {
	var fila = [];
	for (var i = 0; i < 7; i++) {
		fila.push(frutaRandom());

		var sectionFrutas = document.getElementById('sectionFrutas');
		console.log(sectionFrutas);
		var miFruta = document.createElement("article");
		miFruta.setAttribute("class", frutaRandom());
		sectionFrutas.appendChild(miFruta);
	}
	return(fila);
};

// filaDeFruta();

function newLevel(){
	var level = [];
	for (var i = 0; i < 7; i++) {
		level.push(filaDeFruta());


	}


};

newLevel();










