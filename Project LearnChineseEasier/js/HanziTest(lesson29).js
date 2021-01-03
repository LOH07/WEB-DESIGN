var Hanzi = new Array();
	Hanzi[0]="哥";
	Hanzi[1]="第";
	Hanzi[2]="妹";
	Hanzi[3]="亲";
	Hanzi[4]="父";
	Hanzi[5]="母";
	Hanzi[6]="爸";
	Hanzi[7]="妈";

var pinyin = new Array();
	pinyin[0]="ge1";
	pinyin[1]="di4";
	pinyin[2]="mei4";
	pinyin[3]="qin1";
	pinyin[4]="fu4";
	pinyin[5]="mu3";
	pinyin[6]="ba4";
	pinyin[7]="ma1";

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
