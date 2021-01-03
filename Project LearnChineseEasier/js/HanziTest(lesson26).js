var Hanzi = new Array();
	Hanzi[0]="虽";
	Hanzi[1]="然";
	Hanzi[2]="前";
	Hanzi[3]="后";
	Hanzi[4]="时";
	Hanzi[5]="候";
	Hanzi[6]="得";
	Hanzi[7]="但";

var pinyin = new Array();
	pinyin[0]="sui1";
	pinyin[1]="ran2";
	pinyin[2]="qian2";
	pinyin[3]="hou4";
	pinyin[4]="shi2";
	pinyin[5]="hou4";
	pinyin[6]="dei3";
	pinyin[7]="dan4";

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
