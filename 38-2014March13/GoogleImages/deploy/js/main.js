$(init);

function init () {
	initListadoAlbums(83 );
}

function initListadoAlbums (cantAlbums) {
	var detalle = $("#detalle");
	detalle.hide();

	for (var i = cantAlbums - 1; i >= 0; i--) {

		var album = $("<li>");
		var albumThumbnail = $("<img>", {
											src: "http://www.fillmurray.com/300/200",
											click:function() {


												

												var detalleX = detalle.offset().left - $("#galeria").offset().left;

												detalle.hide()
														.css({"left": 0})
														.width($("#galeria").width())
														.appendTo($(this).parent())
														.css({"left": - detalleX})							    	
												    	.slideToggle();
											}
										});

		$(album).append(albumThumbnail).appendTo("#listado-albums");
	};
}