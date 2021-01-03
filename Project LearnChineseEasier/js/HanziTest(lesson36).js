var Hanzi = new Array();
	Hanzi[0]="找";
	Hanzi[1]="快";
	Hanzi[2]="觉";
	Hanzi[3]="借";
	Hanzi[4]="花";
	Hanzi[5]="懂";
	Hanzi[6]="园";
	Hanzi[7]="始";

var pinyin = new Array();
	pinyin[0]="zhao3";
	pinyin[1]="kuai4";
	pinyin[2]="jue2";
	pinyin[3]="jie4";
	pinyin[4]="hua1";
	pinyin[5]="dong3";
	pinyin[6]="yuan2";
	pinyin[7]="shi3";

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
