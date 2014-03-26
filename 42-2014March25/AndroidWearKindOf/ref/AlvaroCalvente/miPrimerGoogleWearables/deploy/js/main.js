
var cantImagenes;
var anchoImagen;
var altoImagen;

$(function() {
	setGalery();
});

function setGalery () {
	cantImagenes = $('#imageContainer li').length;
	// console.log('cantImagenes ',$('#imageContainer li').length);

	anchoImagen = $('#imageContainer li').width();
	// console.log('anchoImagen: ',$('#imageContainer li').width());

	$('#imageContainer').width(anchoImagen*cantImagenes);

	// for (var i=0; i<=cantImagenes; i++){
	// 	$('#imageContainer').width(anchoImagen*i);
	// 	// console.log('ancho imageContainer: ',$('#imageContainer').width());
	// }
	setNav();
}


function setNav() {
	// for (var i = cantImagenes - 1; i >= 0; i--) {
		//TODO: implementar NAV
	// };

	for (var i = 0; i < cantImagenes; i++) {
		$("<button>", {
						class: "round button dissapear",
						click: function() {
											goImage( $(this).index() );
										  }
					  }).appendTo( $("#galleryNav") );
	};
}


function goImage(imageNumber) {
	$('#imageContainer').animate({left: -(anchoImagen*imageNumber)}, 250);
}



























// $('#goLeft').click(function() {
// 	console.log('left --> dónde estoy ahora? Aquí= ' + $('#imageContainer').position().left);
	
	
// 	// $('#goRight').toggleClass('dissapear');


// 	if ($('#imageContainer').position().left < 0) 
// 	{
// 		$('#goLeft, #goRight').toggleClass('dissapear');	
// 		$('#imageContainer').animate({left:'+='+anchoImagen}, 250);
// 	} 

// });

// $('#goRight').click(function() {
	
// 	// $('#goLeft').toggleClass('dissapear');

// 	if ($('#imageContainer').position().left > -($('#imageContainer').width()-anchoImagen))
// 	{
// 		$('#goLeft, #goRight').toggleClass('dissapear');
// 		$('#imageContainer').animate({left:'-='+anchoImagen}, 250, function () {
// 			console.log('right --> dónde estoy ahora? Aquí= ' + $('#imageContainer').position().left);
// 		});
// 	}
// });
















