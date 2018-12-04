jQuery(document).ready(function() {
	jQuery(".btn-photo").click(function() {
		for (let i = 1; i <= 10; i++) {
			jQuery("#img-"+i).attr('src', '../images/photo/photo-img-'+i+'.jpg');
		}
	});

	jQuery(".btn-design").click(function() {
		for (let i = 1; i <= 10; i++) {
			jQuery("#img-"+i).attr('src', '../images/design/design-img-'+i+'.jpg');
		}
	});

	jQuery(".btn-print").click(function() {
		for (let i = 1; i <= 10; i++) {
			jQuery("#img-"+i).attr('src', '../images/print/print-img-'+i+'.jpg');
		}
	});
});