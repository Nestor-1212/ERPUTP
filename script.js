$('#ingresar').click(function (e) { 
    e.preventDefault();
$(location).attr('href','Segunda.html');
    console.log("entre");
    
});




$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

$('#salir').click(function (e) { 
    e.preventDefault();
    console.log("entre");
    $(location).attr('href','index.html');

});

$("#").click(function (e) { 
    e.preventDefault();
    console.log("entre");
    $(location).attr('href','Alivio.html');
});