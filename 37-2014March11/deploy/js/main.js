$(init);

function init () {
	initListadoAlbums(17);
}

function initListadoAlbums (cantAlbums) {
	var detalle = $("#detalle");
	detalle.hide();

	for (var i = cantAlbums - 1; i >= 0; i--) {

		var album = $("<li>");
		var albumThumbnail = $("<img>", {
											src: "http://www.fillmurray.com/300/200",
											click:function() {
												detalle.appendTo($(this).parent()).hide().slideToggle();
												detalle.width( $("#galeria").width() );
											}
										});

		$(album).append(albumThumbnail).appendTo("#listado-albums");
	};
}