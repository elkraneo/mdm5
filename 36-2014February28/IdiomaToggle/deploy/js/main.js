// $(alert("BLA"));
// $("<p id='juanito'>hola parrafo</p>").appendTo("body");
// $("<p id='juanito2'>hola parrafo2</p>").prependTo("body");

// $("<button>",{
// 				id:"pedro",
// 				text:"tim button",
// 				click:function () {
// 					alert("HEY!");
// 				}
// 			}).insertAfter("body");

// $("#juanito").remove();
// $("p").remove(":contains('parrafo2')");
// $("p").html("adios mundo cruel");
// $("p").text("adios mundo cruel texto");

 // $("p").html("<b>Warning!</b> este texto ha sido reemplazado");
// $("p").text("<b>Warning!</b> este texto ha sido reemplazado");



// $("<button>",{
// 				id:"carlos",
// 				text:"carlos button"
// 			}).appendTo("body");

// $("#carlos").hover(
// 	function(){
// 		$(this).text("estoy hover");
// 		$(this).next().slideDown().fadeIn();
// 	},
// 	function(){
// 		$(this).text("pues ya no");
// 		$(this).next().slideUp().fadeOut();
// 	}
// );

// $("<h1>es su padre</h1>").appendTo("body").hide();


// $("<nav>", {
// 			id:"main-nav",
// 			html:'<nav><ul><li><a href="seccion1">ir a seccion 1</a></li><li><a href="seccion2">ir a seccion 2</a></li><li><a href="seccion3">ir a seccion 3</a></li><li><a href="seccion4">ir a seccion 4</a></li><li><a href="seccion5">ir a seccion 5</a></li></ul></nav>'
// 			}).appendTo("body").hide().slideDown(2000);


// $(document).scroll(function() {
// 	// $("body").append("<p>scroll tu padre</p>");
// 	$("#main-nav").css({
// 		"position":"absolute"
// 	}).stop().animate({
// 		"top": $(document).scrollTop()
// 	});

// 	console.log($(document).scrollTop());
// })


// $(window).resize(function(){
// 	// alert("MAS CAMBIAO");
// 	if ($("body").width() > 900) {
// 		alert("MAS CAMBIAO");
// 	}
// });

// $("<section>").appendTo("body").load("nav.html #nav-es");
// $("<nav>").appendTo("<section>").load("nav.html #nav-es");
// $("<button>",{
// 				id:"idioma",
// 				text:"other language",
// 				click:function () {
// 					var idiomaNav = $("nav").attr("id");
// 					console.log(idiomaNav);

// 					if(idiomaNav == "nav-es"){
// 						console.log("esta en ingles");
// 						$("section").load("nav.html #nav-en");
// 						$(this).text("otro idioma");
// 					}else{
// 						console.log("esta en español");
// 						$("section").load("nav.html #nav-es");
// 						$(this).text("other language");	
// 					}


//  				}
// 			}).appendTo("body");

$("<section>").appendTo("body").load("nav.html", function(){
	$("#nav-en").hide();
});


$("<button>",{
	id:"idioma",
	text:"other language",
	click:function () {
		var heightNav = $("nav").height();
		console.log("heightNav: ", heightNav);

					// $("#nav-en, #nav-es").toggle();
					$("#nav-en, #nav-es").css({"position":"absolute"}).fadeToggle();

					$(this).css({"position":"relative", "top":""+heightNav+"px"});

				}
			}).appendTo("body");


 





























