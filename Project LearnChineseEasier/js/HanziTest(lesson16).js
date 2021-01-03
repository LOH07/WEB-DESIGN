var Hanzi = new Array();
	Hanzi[0]="老";
	Hanzi[1]="师";
	Hanzi[2]="学";
	Hanzi[3]="校";
	Hanzi[4]="位";
	Hanzi[5]="到";
	Hanzi[6]="说";
	Hanzi[7]="想";

var pinyin = new Array();
	pinyin[0]="lao3";
	pinyin[1]="shi1";
	pinyin[2]="xue2";
	pinyin[3]="xiao4";
	pinyin[4]="wei4";
	pinyin[5]="dao4";
	pinyin[6]="shuo1";
	pinyin[7]="xiang3";

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
