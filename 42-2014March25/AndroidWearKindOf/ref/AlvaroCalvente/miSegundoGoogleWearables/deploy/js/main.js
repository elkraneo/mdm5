$('#googleBtn').click(function() {
	$(this).css({'background-color': 'rgba(255, 0, 0, 1)'});

	botar($('#googleBtn'), 2, '20px', 120);
    // debugger;
    // console.log('boto');

    $('#wathcSquare').css({'overflow':'scroll'});
    // console.log('tengo scroll');

    $('#homeScreen').hide();
    // console.log('oculto');

    $('#actionsMenu').fadeToggle();
    // console.log('aparezco');


    // para pasar blanco
	// .animate({'top':'0em'}, 'easeOut', function() {
	// var $myCanvas = '<canvas id="myCanvas"></canvas>';
	// $myCanvas.insertAfter($('nav')).css({'position':'absolute','top':'0', 'left':'0', 'background-color': 'green' });

	// dibujar círculo


	// scroll
	$('#wathcSquare').scroll(function () {
			if($('#actionsMenu ul').scrollTop() = 50)
			{
				console.log($('#actionsMenu ul').scrollTop());

			}
	});
	





function botar(element, times, distance, speed) {
	for(i = 0; i < times; i++) {
		element.animate({top: '-='+distance},speed)
		.animate({top: '+='+distance},speed);
	}        
}

});









