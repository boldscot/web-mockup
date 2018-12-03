$(document).ready(function() {
	$(".scroll-down-button").click(function() {
		$('html, body').animate({
			scrollTop: $(".section-2").offset().top
		}, 1000);
	}); 
});

