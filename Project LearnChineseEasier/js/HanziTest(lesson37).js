var Hanzi = new Array(7);
	Hanzi[0] = "间";
	Hanzi[1] = "正";
	Hanzi[2] = "意";
	Hanzi[3] = "思";
	Hanzi[4] = "别";
	Hanzi[5] = "司";
	Hanzi[6] = "吧";
	Hanzi[7] = "半";

var pinyin = new Array(7);
	pinyin[0] = "jian1";
	pinyin[1] = "zheng4";
	pinyin[2] = "yi4";
	pinyin[3] = "si1";
	pinyin[4] = "bie2";
	pinyin[5] = "si1";
	pinyin[6] = "ba";
	pinyin[7] = "ban4";

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
