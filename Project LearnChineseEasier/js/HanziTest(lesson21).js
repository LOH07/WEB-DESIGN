var Hanzi = new Array();
	Hanzi[0]="吃";
	Hanzi[1]="反";
	Hanzi[2]="水";
	Hanzi[3]="果";
	Hanzi[4]="菜";
	Hanzi[5]="些";
	Hanzi[6]="市";
	Hanzi[7]="场";

var pinyin = new Array();
	pinyin[0]="chi1";
	pinyin[1]="fan4";
	pinyin[2]="shui3";
	pinyin[3]="guo3";
	pinyin[4]="cai4";
	pinyin[5]="xie1";
	pinyin[6]="shi4";
	pinyin[7]="chang3";

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
