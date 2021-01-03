var Hanzi = new Array();
	Hanzi[0]="日";
	Hanzi[1]="月";
	Hanzi[2]="礼";
	Hanzi[3]="拜";
	Hanzi[4]="星";
	Hanzi[5]="期";
	Hanzi[6]="谁";
	Hanzi[7]="号";

var pinyin = new Array();
	pinyin[0]="ri4";
	pinyin[1]="yue4";
	pinyin[2]="li3";
	pinyin[3]="bai4";
	pinyin[4]="xing1";
	pinyin[5]="qi1";
	pinyin[6]="shei2";
	pinyin[7]="hao4";

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
