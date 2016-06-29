$(document).ready(function() {
	var hover = false
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		hover = true;
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		hover = false;
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','540px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	$(document).keydown(function(e) {
		if(e.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	$(document).keyup(function(e) {
		if(e.which == 88) {
			$('.ryu-cool').hide();
			if (hover == false) {
				$('.ryu-still').show();
			}
			else {
				$('.ryu-ready').show();
			}
		}
	})
});

function playHadouken (){
	$('#hadouken-sound')[0].volume = 0.25;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
