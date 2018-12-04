jQuery(document).ready(function() {
	jQuery(".scroll-down-button").click(function() {
		jQuery('html, body').animate({
			scrollTop: $(".section-2").offset().top
		}, 1000);
	}); 
});

