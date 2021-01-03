var Hanzi = new Array();
	Hanzi[0]="肉";
	Hanzi[1]="鱼";
	Hanzi[2]="牛";
	Hanzi[3]="猪";
	Hanzi[4]="鸡";
	Hanzi[5]="茶";
	Hanzi[6]="刚";
	Hanzi[7]="再";

var pinyin = new Array();
	pinyin[0]="rou4";
	pinyin[1]="yu2";
	pinyin[2]="niu2";
	pinyin[3]="zhu1";
	pinyin[4]="ji1";
	pinyin[5]="cha2";
	pinyin[6]="gang1";
	pinyin[7]="zai4";

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
