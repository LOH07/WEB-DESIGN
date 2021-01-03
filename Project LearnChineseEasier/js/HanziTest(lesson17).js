var Hanzi = new Array();
	Hanzi[0]="大";
	Hanzi[1]="少";
	Hanzi[2]="杯";
	Hanzi[3]="子";
	Hanzi[4]="对";
	Hanzi[5]="谢";
	Hanzi[6]="赵";
	Hanzi[7]="杨";

var pinyin = new Array();
	pinyin[0]="da4";
	pinyin[1]="shao3";
	pinyin[2]="bei1";
	pinyin[3]="zi";
	pinyin[4]="dui4";
	pinyin[5]="xie4";
	pinyin[6]="zhao4";
	pinyin[7]="yang2";

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
