var Hanzi = new Array();
	Hanzi[0]="陈";
	Hanzi[1]="林";
	Hanzi[2]="黄";
	Hanzi[3]="张";
	Hanzi[4]="李";
	Hanzi[5]="王";
	Hanzi[6]="吴";
	Hanzi[7]="刘";

var pinyin = new Array();
	pinyin[0]="chen2";
	pinyin[1]="lin2";
	pinyin[2]="huang2";
	pinyin[3]="zhang1";
	pinyin[4]="li3";
	pinyin[5]="wang2";
	pinyin[6]="wu2";
	pinyin[7]="liu2";

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
