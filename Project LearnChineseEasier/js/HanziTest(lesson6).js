var Hanzi = new Array();
	Hanzi[0]="一";
	Hanzi[1]="二";
	Hanzi[2]="三";
	Hanzi[3]="四";
	Hanzi[4]="五";
	Hanzi[5]="六";
	Hanzi[6]="七";
	Hanzi[7]="八";

var pinyin = new Array();
	pinyin[0]="yi1";
	pinyin[1]="er4";
	pinyin[2]="san1";
	pinyin[3]="si4";
	pinyin[4]="wu3";
	pinyin[5]="liu4";
	pinyin[6]="qi1";
	pinyin[7]="ba1";

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
