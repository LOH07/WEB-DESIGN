var Hanzi = new Array();
	Hanzi[0]="怎";
	Hanzi[1]="做";
	Hanzi[2]="山";
	Hanzi[3]="气";
	Hanzi[4]="记";
	Hanzi[5]="关";
	Hanzi[6]="够";
	Hanzi[7]="和";

var pinyin = new Array();
	pinyin[0]="zen3";
	pinyin[1]="zuo4";
	pinyin[2]="shan1";
	pinyin[3]="qi4";
	pinyin[4]="ji4";
	pinyin[5]="guan1";
	pinyin[6]="gou4";
	pinyin[7]="he2";

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
