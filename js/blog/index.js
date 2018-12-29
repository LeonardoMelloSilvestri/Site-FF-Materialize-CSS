$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.materialboxed').materialbox();	
	$('#main-carousel').carousel({
	fullWidth: true,
	indicators: true
	});
	
	function autoplay() {
	    setTimeout(function(){
	    	$('.carousel').carousel('next');
			autoplay();
	    }, 4000)	   
	}

	autoplay();
})