function Client(testimonial, avatar, name, companyName) {
	this.testimonial= testimonial;
	this.avatar = avatar;
	this.name = name;
	this.companyName = companyName; 
}

let clients = [
	new Client('“Awalnya saya tidak menderita penyakit apapun, namun setelah saya tidak'
              + 'berobat ke klinik tongfang, saya dinyatakan tidak menderita penyakit apapun!”',
              '../images/client-imgs/client-1-img.png',
              "Stone Cold",
              "Woop-Ass Inc."),
	new Client('“Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet!”',
              '../images/client-imgs/client-2-img.png',
              "Triss",
              "Lodge of Sorceress."),
	new Client('“Awalnya saya tidak menderita penyakit apapun, namun setelah saya tidak'
              + 'berobat ke klinik tongfang, saya dinyatakan tidak menderita penyakit apapun!”',
              "../images/client-imgs/client-1-img.png",
              "Geralt of Rivia",
              "Witcher!.")
];

jQuery(document).ready(function() {
	let client = clients[0];
	jQuery(".testimonial-text").text(client.testimonial);
	jQuery(".client-img").attr('src', client.avatar);
	jQuery(".client-name").text(client.name);
	jQuery(".client-company").text(client.companyName);
});


jQuery(document).ready(function() {
	let counter = 0;

	jQuery(".left-arrow").click(function() {
		if (counter===0) {
			counter=clients.length-1;
		} else {
			--counter;
		}

		let client = clients[counter];
		jQuery(".testimonial-text").text(client.testimonial);
		jQuery(".client-img").attr('src', client.avatar);
		jQuery(".client-name").text(client.name);
		jQuery(".client-company").text(client.companyName);
	});

	jQuery(".right-arrow").click(function() {
		if (counter===clients.length-1) {
			counter=0;
		} else {
			++counter;
		}

		let client = clients[counter];
		jQuery(".testimonial-text").text(client.testimonial);
		jQuery(".client-img").attr('src', client.avatar);
		jQuery(".client-name").text(client.name);
		jQuery(".client-company").text(client.companyName);
	});
});