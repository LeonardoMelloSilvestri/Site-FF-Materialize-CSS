$(document).ready(function(){
	if(window.innerWidth <= 860) {
		$('#main-col').removeClass('m6 offset-m3');
		$('#main-col').addClass('m8 offset-m2');
	}

	$(window).resize(function(){
		if(window.innerWidth <= 860) {
			$('#main-col').removeClass('m6 offset-m3');
			$('#main-col').addClass('m8 offset-m2');
		} else {
			$('#main-col').removeClass('m8 offset-m2');
			$('#main-col').addClass('m6 offset-m3');			
		}
	})
})