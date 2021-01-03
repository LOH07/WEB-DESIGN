var Hanzi = new Array();
	Hanzi[0]="应";
	Hanzi[1]="该";
	Hanzi[2]="已";
	Hanzi[3]="经";
	Hanzi[4]="真";
	Hanzi[5]="定";
	Hanzi[6]="比";
	Hanzi[7]="较";

var pinyin = new Array();
	pinyin[0]="ying1";
	pinyin[1]="gai1";
	pinyin[2]="yi3";
	pinyin[3]="jing1";
	pinyin[4]="zhen1";
	pinyin[5]="ding4";
	pinyin[6]="bi3";
	pinyin[7]="jiao3";

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
