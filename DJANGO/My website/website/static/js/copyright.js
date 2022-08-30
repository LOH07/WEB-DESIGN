$(document).ready(
function(){
	var date = new Date();
	var today = date.getTime();
//	var Year2013 = 1356991200000;
	var thisYear = date.getFullYear();

document.getElementById("cr").innerHTML = thisYear;

/*	if(today < Year2013){
		$('#copyright').text('© Copyright 2012, Webmaster');
	}
	else{
		$('#copyright').text('© Copyright 2012-'+thisYear+', Webmaster');
	}*/
});
