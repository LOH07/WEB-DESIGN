var Hanzi = new Array();
	Hanzi[0]="先";
	Hanzi[1]="生";
	Hanzi[2]="小";
	Hanzi[3]="姐";
	Hanzi[4]="姓";
	Hanzi[5]="叫";
	Hanzi[6]="名";
	Hanzi[7]="字";

var pinyin = new Array();
	pinyin[0]="xian1";
	pinyin[1]="sheng1";
	pinyin[2]="xiao3";
	pinyin[3]="jie3";
	pinyin[4]="xing4";
	pinyin[5]="jiao4";
	pinyin[6]="ming2";
	pinyin[7]="zi4";

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
