var miArray = ["papaya", "pera", "manzana", "mango", "platano"];
// miArray[3] = "kiwi"; //reemplaza mango
// miArray.push("kiwi");
console.log("orig: "+miArray);

// miArray.pop();
// console.log("post-pop: "+miArray);

// miArray.shift();
// console.log("post-shift: "+miArray);

// var miArrayReverso = miArray.reverse();
// console.log("post-reverse: "+miArrayReverso);

// console.log(miArray.toString());

// console.log(miArray.length);

// for (var i = 0; i < miArray.length; i++) {
// 	console.log(miArray[i]);
// };

for (var i = miArray.length - 1; i >= 0; i--) {
	console.log(i +" "+ miArray[i]);
};