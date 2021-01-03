var image = new Array();
	image[0] = "./imagesVT/images(lesson3)/de.gif";
	image[1] = "./imagesVT/images(lesson3)/dong3.gif";
	image[2] = "./imagesVT/images(lesson3)/dui4.gif";
	image[3] = "./imagesVT/images(lesson3)/duo1shao.gif";
	image[4] = "./imagesVT/images(lesson3)/duo1shao-qian2.gif";
	image[5] = "./imagesVT/images(lesson3)/fen1.gif";
	image[6] = "./imagesVT/images(lesson3)/feng1.gif";
	image[7] = "./imagesVT/images(lesson3)/gua4hao4xin4.jpg";
	image[8] = "./imagesVT/images(lesson3)/gua4-hao4.gif";
	image[9] = "./imagesVT/images(lesson3)/hai2.gif";
	image[10] = "./imagesVT/images(lesson3)/hai2shi.gif";
	image[11] = "./imagesVT/images(lesson3)/hang2kong1.jpg";
	image[12] = "./imagesVT/images(lesson3)/hang2kong1xin4.jpg";
	image[13] = "./imagesVT/images(lesson3)/ji3.gif";
	image[14] = "./imagesVT/images(lesson3)/ji4-xin4.gif";
	image[15] = "./imagesVT/images(lesson3)/kuai4.gif";
	image[16] = "./imagesVT/images(lesson3)/liang3.gif";
	image[17] = "./imagesVT/images(lesson3)/mai3.gif";
	image[18] = "./imagesVT/images(lesson3)/mai4.gif";
	image[19] = "./imagesVT/images(lesson3)/mao2.gif";
	image[20] = "./imagesVT/images(lesson3)/ming2xin4pian4.jpg";
	image[21] = "./imagesVT/images(lesson3)/qian2.gif";
	image[22] = "./imagesVT/images(lesson3)/shuo1.gif";
	image[23] = "./imagesVT/images(lesson3)/wen4.gif";
	image[24] = "./imagesVT/images(lesson3)/xin4.jpg";
	image[25] = "./imagesVT/images(lesson3)/yao4.gif";
	image[26] = "./imagesVT/images(lesson3)/yi2gong4.gif";
	image[27] = "./imagesVT/images(lesson3)/you2ju2.jpg";
	image[28] = "./imagesVT/images(lesson3)/you2piao4.gif";
	image[29] = "./imagesVT/images(lesson3)/zhang1.gif";
	image[30] = "./imagesVT/images(lesson3)/zhao4.gif";
	image[31] = "./imagesVT/images(lesson3)/ji4.gif";

var pinyin = new Array();
	pinyin[0]="de";
	pinyin[1]="dong3";
	pinyin[2]="dui4";
	pinyin[3]="duo1shao";
	pinyin[4]="duo1shao-qian2";
	pinyin[5]="fen1";
	pinyin[6]="feng1";
	pinyin[7]="gua4hao4xin4";
	pinyin[8]="gua4-hao4";
	pinyin[9]="hai2";
	pinyin[10]="hai2shi";
	pinyin[11]="hang2kong1";
	pinyin[12]="hang2kong1xin4";
	pinyin[13]="ji3";
	pinyin[14]="ji4-xin4";
	pinyin[15]="kuai4";
	pinyin[16]="liang3";
	pinyin[17]="mai3";
	pinyin[18]="mai4";
	pinyin[19]="mao2";
	pinyin[20]="ming2xin4pian4";
	pinyin[21]="qian2";
	pinyin[22]="shuo1";
	pinyin[23]="wen4";
	pinyin[24]="xin4";
	pinyin[25]="yao4";
	pinyin[26]="yi2gong4";
	pinyin[27]="you2ju2";
	pinyin[28]="you2piao4";
	pinyin[29]="zhang1";
	pinyin[30]="zhao4";
	pinyin[31]="ji4";

var sounds = new Array();
	sounds[0]="./soundsVT/sounds(lesson3)/sound0.mp3";
	sounds[1]="./soundsVT/sounds(lesson3)/sound1.mp3";
	sounds[2]="./soundsVT/sounds(lesson3)/sound2.mp3";
	sounds[3]="./soundsVT/sounds(lesson3)/sound3.mp3";
	sounds[4]="./soundsVT/sounds(lesson3)/sound4.mp3";
	sounds[5]="./soundsVT/sounds(lesson3)/sound5.mp3";
	sounds[6]="./soundsVT/sounds(lesson3)/sound6.mp3";
	sounds[7]="./soundsVT/sounds(lesson3)/sound7.mp3";
	sounds[8]="./soundsVT/sounds(lesson3)/sound8.mp3";
	sounds[9]="./soundsVT/sounds(lesson3)/sound9.mp3";
	sounds[10]="./soundsVT/sounds(lesson3)/sound10.mp3";
	sounds[11]="./soundsVT/sounds(lesson3)/sound11.mp3";
	sounds[12]="./soundsVT/sounds(lesson3)/sound12.mp3";
	sounds[13]="./soundsVT/sounds(lesson3)/sound13.mp3";
	sounds[14]="./soundsVT/sounds(lesson3)/sound14.mp3";
	sounds[15]="./soundsVT/sounds(lesson3)/sound15.mp3";
	sounds[16]="./soundsVT/sounds(lesson3)/sound16.mp3";
	sounds[17]="./soundsVT/sounds(lesson3)/sound17.mp3";
	sounds[18]="./soundsVT/sounds(lesson3)/sound18.mp3";
	sounds[19]="./soundsVT/sounds(lesson3)/sound19.mp3";
	sounds[20]="./soundsVT/sounds(lesson3)/sound20.mp3";
	sounds[21]="./soundsVT/sounds(lesson3)/sound21.mp3";
	sounds[22]="./soundsVT/sounds(lesson3)/sound22.mp3";
	sounds[23]="./soundsVT/sounds(lesson3)/sound23.mp3";
	sounds[24]="./soundsVT/sounds(lesson3)/sound24.mp3";
	sounds[25]="./soundsVT/sounds(lesson3)/sound25.mp3";
	sounds[26]="./soundsVT/sounds(lesson3)/sound26.mp3";
	sounds[27]="./soundsVT/sounds(lesson3)/sound27.mp3";
	sounds[28]="./soundsVT/sounds(lesson3)/sound28.mp3";
	sounds[29]="./soundsVT/sounds(lesson3)/sound29.mp3";
	sounds[30]="./soundsVT/sounds(lesson3)/sound30.mp3";
	sounds[31]="./soundsVT/sounds(lesson3)/sound31.mp3";

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
