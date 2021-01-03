var Hanzi = new Array();
	Hanzi[0]="常";
	Hanzi[1]="午";
	Hanzi[2]="更";
	Hanzi[3]="最";
	Hanzi[4]="因";
	Hanzi[5]="为";
	Hanzi[6]="高";
	Hanzi[7]="所";

var pinyin = new Array();
	pinyin[0]="chang2";
	pinyin[1]="wu3";
	pinyin[2]="geng4";
	pinyin[3]="zui4";
	pinyin[4]="yin1";
	pinyin[5]="wei4";
	pinyin[6]="gao1";
	pinyin[7]="suo3";

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
