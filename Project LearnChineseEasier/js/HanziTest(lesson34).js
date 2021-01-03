var Hanzi = new Array();
	Hanzi[0]="头";
	Hanzi[1]="斤";
	Hanzi[2]="知";
	Hanzi[3]="道";
	Hanzi[4]="寄";
	Hanzi[5]="信";
	Hanzi[6]="见";
	Hanzi[7]="早";

var pinyin = new Array();
	pinyin[0]="tou2";
	pinyin[1]="jin1";
	pinyin[2]="zhi1";
	pinyin[3]="dao4";
	pinyin[4]="ji4";
	pinyin[5]="xin4";
	pinyin[6]="jian4";
	pinyin[7]="zao3";

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
