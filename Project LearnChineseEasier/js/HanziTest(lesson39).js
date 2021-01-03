var Hanzi = new Array();
	Hanzi[0]="带";
	Hanzi[1]="出";
	Hanzi[2]="第";
	Hanzi[3]="昨";
	Hanzi[4]="告";
	Hanzi[5]="诉";
	Hanzi[6]="难";
	Hanzi[7]="办";

var pinyin = new Array();
	pinyin[0]="dai4";
	pinyin[1]="chu1";
	pinyin[2]="di4";
	pinyin[3]="zuo2";
	pinyin[4]="gao4";
	pinyin[5]="su4";
	pinyin[6]="nan2";
	pinyin[7]="ban4";

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
