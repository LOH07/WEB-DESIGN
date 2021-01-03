var Hanzi = new Array();
	Hanzi[0]="可";
	Hanzi[1]="以";
	Hanzi[2]="能";
	Hanzi[3]="会";
	Hanzi[4]="喜";
	Hanzi[5]="欢";
	Hanzi[6]="打";
	Hanzi[7]="算";

var pinyin = new Array();
	pinyin[0]="ke3";
	pinyin[1]="yi3";
	pinyin[2]="neng2";
	pinyin[3]="hui4";
	pinyin[4]="xi3";
	pinyin[5]="huan1";
	pinyin[6]="da3";
	pinyin[7]="suan4";

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
