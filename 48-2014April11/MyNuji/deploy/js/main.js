$("#containerFrame").scroll(function () {
	var posicionHeader = ($("#containerFrame header").position().top * -1)+ $("#containerFrame header").height();
	$("#containerFrame header").css({"top":posicionHeader});
	console.log("top: ", posicionHeader);
});