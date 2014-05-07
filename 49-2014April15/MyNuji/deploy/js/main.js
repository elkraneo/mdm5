$(function(){
	var posicionListado;
	var nav = $("<nav>",{
					id:"menu-list",
					scroll:function () {
						posicionListado = $("#menu-list ul").position().top;

						//condicional ternario
						(posicionListado < -300) ?
						$("#containerFrame header").fadeOut() :
						$("#containerFrame header").fadeIn();
					}
				});

	$("ul").wrapAll(nav);
});
