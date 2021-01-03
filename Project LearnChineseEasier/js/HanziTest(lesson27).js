var Hanzi = new Array();
	Hanzi[0]="邮";
	Hanzi[1]="局";
	Hanzi[2]="电";
	Hanzi[3]="边";
	Hanzi[4]="课";
	Hanzi[5]="现";
	Hanzi[6]="马";
	Hanzi[7]="久";

var pinyin = new Array();
	pinyin[0]="you2";
	pinyin[1]="ju2";
	pinyin[2]="dian4";
	pinyin[3]="bian1";
	pinyin[4]="ke4";
	pinyin[5]="xian4";
	pinyin[6]="ma3";
	pinyin[7]="jiu3";

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
