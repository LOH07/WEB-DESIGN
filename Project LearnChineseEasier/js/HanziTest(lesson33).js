var Hanzi = new Array();
	Hanzi[0]="票";
	Hanzi[1]="事";
	Hanzi[2]="外";
	Hanzi[3]="每";
	Hanzi[4]="自";
	Hanzi[5]="己";
	Hanzi[6]="穿";
	Hanzi[7]="红";

var pinyin = new Array();
	pinyin[0]="piao4";
	pinyin[1]="shi4";
	pinyin[2]="wai4";
	pinyin[3]="mei3";
	pinyin[4]="zi4";
	pinyin[5]="ji3";
	pinyin[6]="chuan1";
	pinyin[7]="hong2";

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
