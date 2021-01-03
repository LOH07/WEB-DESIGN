var Hanzi = new Array();
	Hanzi[0]="开";
	Hanzi[1]="车";
	Hanzi[2]="飞";
	Hanzi[3]="机";
	Hanzi[4]="火";
	Hanzi[5]="公";
	Hanzi[6]="坐";
	Hanzi[7]="站";

var pinyin = new Array();
	pinyin[0]="kai1";
	pinyin[1]="che1";
	pinyin[2]="fei1";
	pinyin[3]="ji1";
	pinyin[4]="huo3";
	pinyin[5]="gong1";
	pinyin[6]="zuo4";
	pinyin[7]="zhan4";

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
