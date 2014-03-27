;(function($) {
	$.fn.murrayrize = function(options){

		var settings = $.extend({
			src : "http://www.fillmurray.com/300/300"
		}, options);

		this.each(function(){
			$(this).attr("src", settings.src);
		});
	}
}(jQuery));