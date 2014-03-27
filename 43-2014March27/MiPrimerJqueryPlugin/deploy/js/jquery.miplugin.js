//1
// ;(function($) {
// 	$.fn.helloLala = function(){
// 		//TODO: plugin en si menor
// 	}
// }(jQuery));


//2
// ;(function($) {
// 	$.fn.helloLala = function(){
// 		this.each(function(){
// 			$(this).text("Hello Lala!");
// 		})
// 	}
// }(jQuery));


//3
// ;(function($) {
// 	$.fn.helloLala = function(customText){
// 		this.each(function(){
// 			$(this).text(customText);
// 		})
// 	}
// }(jQuery));

//4
;(function($) {
	$.fn.helloLala = function(options){

		var settings = $.extend({
			text 		: "BLALA",
			color 		: null,
			fontStyle 	: null
		}, options);

		this.each(function(){
			$(this).text(settings.text);
		})
	}
}(jQuery));