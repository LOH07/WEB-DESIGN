$(window).load(function(){
	var windSize = $(window).width();
	var pageSize = $('#div_Main').width();
	$('#div_Main').css({'margin-left': windSize / 2 - pageSize / 2 });
});
