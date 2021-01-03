var Hanzi = new Array();
	Hanzi[0]="买";
	Hanzi[1]="卖";
	Hanzi[2]="很";
	Hanzi[3]="贵";
	Hanzi[4]="太";
	Hanzi[5]="多";
	Hanzi[6]="块";
	Hanzi[7]="钱";

var pinyin = new Array();
	pinyin[0]="mai3";
	pinyin[1]="mai4";
	pinyin[2]="hen3";
	pinyin[3]="gui4";
	pinyin[4]="tai4";
	pinyin[5]="duo1";
	pinyin[6]="kuai4";
	pinyin[7]="qian2";

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
