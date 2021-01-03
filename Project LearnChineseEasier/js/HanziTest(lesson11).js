var Hanzi = new Array();
	Hanzi[0]="来";
	Hanzi[1]="去";
	Hanzi[2]="几";
	Hanzi[3]="点";
	Hanzi[4]="天";
	Hanzi[5]="年";
	Hanzi[6]="今";
	Hanzi[7]="明";

var pinyin = new Array();
	pinyin[0]="lai2";
	pinyin[1]="qu4";
	pinyin[2]="ji3";
	pinyin[3]="dian3";
	pinyin[4]="tian1";
	pinyin[5]="nian2";
	pinyin[6]="jin1";
	pinyin[7]="ming2";

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
