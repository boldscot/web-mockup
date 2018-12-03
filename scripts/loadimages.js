$(document).ready(function() {
	$(".btn-photo").click(function() {
		for (let i = 1; i <= 10; i++) {
			$("#img-"+i).attr('src', '../images/photo/photo-img-'+i+'.jpg');
		}
	});

	$(".btn-design").click(function() {
		for (let i = 1; i <= 10; i++) {
			$("#img-"+i).attr('src', '../images/design/design-img-'+i+'.jpg');
		}
	});

	$(".btn-print").click(function() {
		for (let i = 1; i <= 10; i++) {
			$("#img-"+i).attr('src', '../images/print/print-img-'+i+'.jpg');
		}
	});
});