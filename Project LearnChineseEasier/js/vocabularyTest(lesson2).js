var image = new Array();
	image[0]= "./imagesVT/images(lesson2)/bei1zi.jpg";
	image[1]= "./imagesVT/images(lesson2)/bi3.jpg";
	image[2]= "./imagesVT/images(lesson2)/bu2-xie4.gif";
	image[3]= "./imagesVT/images(lesson2)/dong1xi.jpg";
	image[4]= "./imagesVT/images(lesson2)/dui4buqi3.gif";
	image[5]= "./imagesVT/images(lesson2)/fen3bi3.png";
	image[6]= "./imagesVT/images(lesson2)/gei3.gif";
	image[7]= "./imagesVT/images(lesson2)/hao3.gif";
	image[8]= "./imagesVT/images(lesson2)/hao3-bu4-hao3.gif";
	image[9]= "./imagesVT/images(lesson2)/huang2.gif";
	image[10]= "./imagesVT/images(lesson2)/jiao4shi4.jpg";
	image[11]= "./imagesVT/images(lesson2)/li3.gif";
	image[12]= "./imagesVT/images(lesson2)/liu2.gif";
	image[13]= "./imagesVT/images(lesson2)/mei2-guan1xi.gif";
	image[14]= "./imagesVT/images(lesson2)/na4.gif";
	image[15]= "./imagesVT/images(lesson2)/ni3hao3.gif";
	image[16]= "./imagesVT/images(lesson2)/qing3.gif";
	image[17]= "./imagesVT/images(lesson2)/shei2.gif";
	image[18]= "./imagesVT/images(lesson2)/shu1.jpg";
	image[19]= "./imagesVT/images(lesson2)/xie4xie.gif";
	image[20]= "./imagesVT/images(lesson2)/yao4.gif";
	image[21]= "./imagesVT/images(lesson2)/ye3.gif";
	image[22]= "./imagesVT/images(lesson2)/you3.gif";
	image[23]= "./imagesVT/images(lesson2)/yuan2zhu1bi3.jpg";
	image[24]= "./imagesVT/images(lesson2)/zao3.gif";
	image[25]= "./imagesVT/images(lesson2)/zhe4.gif";

var pinyin = new Array();
	pinyin[0]="bei1zi";
	pinyin[1]="bi3";
	pinyin[2]="bu2-xie4";
	pinyin[3]="dong1xi";
	pinyin[4]="dui4buqi3";
	pinyin[5]="fen3bi3";
	pinyin[6]="gei3";
	pinyin[7]="hao3";
	pinyin[8]="hao3-bu4-hao3";
	pinyin[9]="huang2";
	pinyin[10]="jiao4shi4";
	pinyin[11]="li3";
	pinyin[12]="liu2";
	pinyin[13]="mei2-guan1xi";
	pinyin[14]="na4";
	pinyin[15]="ni3hao3";
	pinyin[16]="qing3";
	pinyin[17]="shei2";
	pinyin[18]="shu1";
	pinyin[19]="xie4xie";
	pinyin[20]="yao4";
	pinyin[21]="ye3";
	pinyin[22]="you3";
	pinyin[23]="yuan2zhu1bi3";
	pinyin[24]="zao3";
	pinyin[25]="zhe4";

var sounds = new Array();
	sounds[0]="./soundsVT/sounds(lesson2)/sound0.mp3";
	sounds[1]="./soundsVT/sounds(lesson2)/sound1.mp3";
	sounds[2]="./soundsVT/sounds(lesson2)/sound2.mp3";
	sounds[3]="./soundsVT/sounds(lesson2)/sound3.mp3";
	sounds[4]="./soundsVT/sounds(lesson2)/sound4.mp3";
	sounds[5]="./soundsVT/sounds(lesson2)/sound5.mp3";
	sounds[6]="./soundsVT/sounds(lesson2)/sound6.mp3";
	sounds[7]="./soundsVT/sounds(lesson2)/sound7.mp3";
	sounds[8]="./soundsVT/sounds(lesson2)/sound8.mp3";
	sounds[9]="./soundsVT/sounds(lesson2)/sound9.mp3";
	sounds[10]="./soundsVT/sounds(lesson2)/sound10.mp3";
	sounds[11]="./soundsVT/sounds(lesson2)/sound11.mp3";
	sounds[12]="./soundsVT/sounds(lesson2)/sound12.mp3";
	sounds[13]="./soundsVT/sounds(lesson2)/sound13.mp3";
	sounds[14]="./soundsVT/sounds(lesson2)/sound14.mp3";
	sounds[15]="./soundsVT/sounds(lesson2)/sound15.mp3";
	sounds[16]="./soundsVT/sounds(lesson2)/sound16.mp3";
	sounds[17]="./soundsVT/sounds(lesson2)/sound17.mp3";
	sounds[18]="./soundsVT/sounds(lesson2)/sound18.mp3";
	sounds[19]="./soundsVT/sounds(lesson2)/sound19.mp3";
	sounds[20]="./soundsVT/sounds(lesson2)/sound20.mp3";
	sounds[21]="./soundsVT/sounds(lesson2)/sound21.mp3";
	sounds[22]="./soundsVT/sounds(lesson2)/sound22.mp3";
	sounds[23]="./soundsVT/sounds(lesson2)/sound23.mp3";
	sounds[24]="./soundsVT/sounds(lesson2)/sound24.mp3";
	sounds[25]="./soundsVT/sounds(lesson2)/sound25.mp3";

var i = 0;
var score = 0;
var userInput;

$(document).ready(function(){
	$('#td1').append('<img src="' + image[i] + '"/>');
	$('#listen').attr({'href': sounds[i]});
});

function showItem(){
	i++;
	$('#td1').append('<img src="' + image[i] + '"/>');
	$('#listen').attr({'href': sounds[i]});
}

function clearItem(){
	$('#td1 img').remove();
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
	if(i == image.length){
		$('#td1').append('<br/><b>FINISH!</b><br/>Your <b>score</b> is <b>' + score +'</b> out of <b>' + image.length + '</b><br/>Please <b>Reload</b> this page to start again.');	
		$('#submit').attr({'disabled':'disabled'});
		$('#listen').removeAttr('href');
	}
}
