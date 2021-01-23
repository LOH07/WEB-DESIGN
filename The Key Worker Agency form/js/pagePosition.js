$(window).load(function(){
	var windSize = $(window).width();
	var pageSize = $('#wrapper').width();
	$('#wrapper').css({'margin-left': windSize / 2 - pageSize / 2 });
});
