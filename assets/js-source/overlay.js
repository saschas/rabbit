$(document).ready(function(){
	$('button[data-button="overlay"]').click(function(){
		var style = $(this).attr('data-button-style');
		console.log(style);
		setStyle(style);
	});
	var setStyle = function ($style){
		$('div[data-overlay-type="'+$style+'"]').attr('class','').toggleClass('active');
	}
	
	$('div[data-type="overlay"]').click(function(){
		$(this).removeClass('active').addClass('inactive');
	});

});