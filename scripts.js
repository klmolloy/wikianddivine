$(document).ready(function() {

	var icons = $('.thumb');

	var god = $('#nameonhover');

	var pantheon = god.html();

	var timer;

	icons.on('mouseover', function() {
		clearTimeout(timer);
		var name = $(this).attr('alt');
		god.html(name);
	});

	icons.on('mouseleave', function() {
		timer = setTimeout(function () {
			god.html(pantheon);
		}, 600);
	});

});