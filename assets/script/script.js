
/*
	Main Script
*/

var initialTime = 3000
var hoverTime = 200
var unhoverOpacity = 0.4
var bgImgFocus = 0.5
var bgImgUnfocus = 0.2

$(document).ready(function() {

	// Initial animation
	var typed = new Typed('#header', {
	  strings: [".","majestic llamas"],
	  typeSpeed: 100
	});

	$('#circle').animate({
		opacity: 1
	}, initialTime);

	setTimeout(function() {
		$('.arrow').animate({
			opacity: unhoverOpacity,
			top: -15
		}, 1000);
		$('#circle img').animate({
			opacity: 0.6
		}, initialTime - 1000);
	}, initialTime)

	// Hover
	$('.arrow').mouseover(function() {
		$(this).animate({
			opacity: 1
		}, hoverTime);
	});

	$('.arrow').mouseout(function() {
		$(this).animate({
			opacity: unhoverOpacity
		}, hoverTime);
	});

	$('.icon').mouseover(function() {
		$(this).animate({
			opacity: 1
		}, hoverTime);
	});

	$('.icon').mouseout(function() {
		$(this).animate({
			opacity: unhoverOpacity
		}, hoverTime);
	});

	// Click
	$('#arrow1').click(function() {
		$('html,body').animate({
	        scrollTop: $("#container1").offset().top}, 'slow');
	});

	$('#arrow2').click(function() {
		$('html,body').animate({
	        scrollTop: $("#container2").offset().top}, 'slow');
	});

	$('#arrow3').click(function() {
		$('html,body').animate({
					scrollTop: $("#container3").offset().top}, 'slow');
	});

	$('#home').click(function() {
		$('html,body').animate({
	    scrollTop: $("html").offset().top}, 'slow');
	});

	$('#github').click(function() {
		window.open('https://github.com/jmoon7/llamas', '_blank').focus();
	});

	// Waypoint
	var waypoint = $('#container1').waypoint(function(direction) {
		if (direction == 'down') {
			$('#background1 img').animate({
				opacity: bgImgFocus
			});
		} else {
			$('#background1 img').animate({
				opacity: bgImgUnfocus
			});
		}
	}, {
		offset: '30%'
	});

	var waypoint2 = $('#container2').waypoint(function(direction) {
		if (direction == 'down') {
			$('#background2 img').animate({
				opacity: bgImgFocus
			});
		} else {
			$('#background2 img').animate({
				opacity: bgImgUnfocus
			});
		}
	}, {
		offset: '30%'
	});

	var waypoint3 = $('#container3').waypoint(function(direction) {
		if (direction == 'down') {
			$('#background3 img').animate({
				opacity: bgImgFocus
			});
		} else {
			$('#background3 img').animate({
				opacity: bgImgUnfocus
			});
		}
	}, {
		offset: '30%'
	});

});
