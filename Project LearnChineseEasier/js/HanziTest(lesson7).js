var Hanzi = new Array();
	Hanzi[0]="九";
	Hanzi[1]="十";
	Hanzi[2]="百";
	Hanzi[3]="千";
	Hanzi[4]="万";
	Hanzi[5]="两";
	Hanzi[6]="个";
	Hanzi[7]="人";

var pinyin = new Array();
	pinyin[0]="jiu3";
	pinyin[1]="shi2";
	pinyin[2]="bai3";
	pinyin[3]="qian1";
	pinyin[4]="wan4";
	pinyin[5]="liang3";
	pinyin[6]="ge";
	pinyin[7]="ren2";

var i = 0;
var score = 0;
var userInput;

$(document).ready(function(){
	$('#td1').append('<p>' + Hanzi[i] + '</p>');
	//$('#listen').attr({'href': sounds[i]});
});

function showItem(){
	i++;
	$('#td1').append('<p>' + Hanzi[i] + '</p>');
	//$('#listen').attr({'href': sounds[i]});
}

function clearItem(){
	$('#td1 p').remove();
}

function clearText(){
	$('#userInput').val("");
}
			
function evalAnswer(){
	userInput = $('#userInput').val();
	if(userInput === ""){
		alert('Please type in your answer!');
	}
	else if(userInput == pinyin[i]){
		score++;
		alert('Your answer is correct!');
		clearItem();
		clearText();
		showItem();
	}
	else if(userInput != pinyin[i]){
		alert('Your answer is wrong!\nCorrect answer is "' + pinyin[i] + '".');
		clearItem();
		clearText();
		showItem();
	}
	if(i == Hanzi.length){
		clearItem();
		$('#td1').append('<p style="font-size:18px;"><br/><b>FINISH!</b><br/>Your <b>score</b> is <b>' + score +'</b> out of max. <b>' + Hanzi.length + '</b><br/>Please <b>Reload</b> this page to start again.</p>');	
		$('#submit').attr({'disabled':'disabled'});
		//$('#listen').removeAttr('href');
	}
}
