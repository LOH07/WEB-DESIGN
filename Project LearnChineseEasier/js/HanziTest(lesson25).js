var Hanzi = new Array();
	Hanzi[0]="家";
	Hanzi[1]="忙";
	Hanzi[2]="容";
	Hanzi[3]="易";
	Hanzi[4]="便";
	Hanzi[5]="宜";
	Hanzi[6]="就";
	Hanzi[7]="了";

var pinyin = new Array();
	pinyin[0]="jia1";
	pinyin[1]="mang2";
	pinyin[2]="rong2";
	pinyin[3]="yi4";
	pinyin[4]="pian2";
	pinyin[5]="yi2";
	pinyin[6]="jiu4";
	pinyin[7]="le";

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
