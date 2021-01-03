var image = new Array();
image[0] = "./imagesVT/images(lesson25)/after_a_while.gif";
image[1] = "./imagesVT/images(lesson25)/box.gif";
image[2] = "./imagesVT/images(lesson25)/butter.gif";
image[3] = "./imagesVT/images(lesson25)/cheese.gif";
image[4] = "./imagesVT/images(lesson25)/chicken_egg.gif";
image[5] = "./imagesVT/images(lesson25)/cookie.gif";
image[6] = "./imagesVT/images(lesson25)/cucumber.gif";
image[7] = "./imagesVT/images(lesson25)/fresh.gif";
image[8] = "./imagesVT/images(lesson25)/fresh_milk.gif";
image[9] = "./imagesVT/images(lesson25)/give_change.gif";
image[10] = "./imagesVT/images(lesson25)/green_onion.gif";
image[11] = "./imagesVT/images(lesson25)/green_pepper.gif";
image[12] = "./imagesVT/images(lesson25)/green_pepper_with_beef.gif";
image[13] = "./imagesVT/images(lesson25)/jelly.gif";
image[14] = "./imagesVT/images(lesson25)/make_tea.gif";
image[15] = "./imagesVT/images(lesson25)/mango.gif";
image[16] = "./imagesVT/images(lesson25)/packet.gif";
image[17] = "./imagesVT/images(lesson25)/papaya.gif";
image[18] = "./imagesVT/images(lesson25)/pass.gif";
image[19] = "./imagesVT/images(lesson25)/pineapple.gif";
image[20] = "./imagesVT/images(lesson25)/plastic_bag.gif";
image[21] = "./imagesVT/images(lesson25)/ripe.gif";
image[22] = "./imagesVT/images(lesson25)/snacks.gif";
image[23] = "./imagesVT/images(lesson25)/strawberry.gif";
image[24] = "./imagesVT/images(lesson25)/tea_leaves.gif";
image[25] = "./imagesVT/images(lesson25)/uncooked_rice.gif";
image[26] = "./imagesVT/images(lesson25)/vegetable_seller.gif";
image[27] = "./imagesVT/images(lesson25)/watermelon.gif";
image[28] = "./imagesVT/images(lesson25)/yogurt.gif";

var pinyin = new Array();
pinyin[0] = "guo4 yi2huir4";
pinyin[1] = "he2";
pinyin[2] = "huang2you2";
pinyin[3] = "nai3lao4";
pinyin[4] = "ji1dan4";
pinyin[5] = "bing3gan1";
pinyin[6] = "huang2gua1";
pinyin[7] = "xin1xian1";
pinyin[8] = "xian1nai3";
pinyin[9] = "zhao3";
pinyin[10] = "cong1";
pinyin[11] = "qing1jiao1";
pinyin[12] = "qing1jiao1 niu2rou4";
pinyin[13] = "guo3jiang4";
pinyin[14] = "pao4-cha2";
pinyin[15] = "mang2guo3";
pinyin[16] = "bao1";
pinyin[17] = "mu4gua1";
pinyin[18] = "guo4";
pinyin[19] = "bo1luo2";
pinyin[20] = "su4liao4dai4";
pinyin[21] = "shu2";
pinyin[22] = "dian3xin1";
pinyin[23] = "cao3mei2";
pinyin[24] = "cha2ye4";
pinyin[25] = "mi3";
pinyin[26] = "mai4cai4de";
pinyin[27] = "xi1gua1";
pinyin[28] = "suan1nai3";

var sounds = new Array();
sounds[0] = "./soundsVT/sounds(lesson25)/guo4 yi2huir4.mp3";
sounds[1] = "./soundsVT/sounds(lesson25)/he2.mp3";
sounds[2] = "./soundsVT/sounds(lesson25)/huang2you2.mp3";
sounds[3] = "./soundsVT/sounds(lesson25)/nai3lao4.mp3";
sounds[4] = "./soundsVT/sounds(lesson25)/ji1dan4.mp3";
sounds[5] = "./soundsVT/sounds(lesson25)/bing3gan1.mp3";
sounds[6] = "./soundsVT/sounds(lesson25)/huang2gua1.mp3";
sounds[7] = "./soundsVT/sounds(lesson25)/xin1xian1.mp3";
sounds[8] = "./soundsVT/sounds(lesson25)/xian1nai3.mp3";
sounds[9] = "./soundsVT/sounds(lesson25)/zhao3.mp3";
sounds[10] = "./soundsVT/sounds(lesson25)/cong1.mp3";
sounds[11] = "./soundsVT/sounds(lesson25)/qing1jiao1.mp3";
sounds[12] = "./soundsVT/sounds(lesson25)/qing1jiao1 niu2rou4.mp3";
sounds[13] = "./soundsVT/sounds(lesson25)/guo3jiang4.mp3";
sounds[14] = "./soundsVT/sounds(lesson25)/pao4-cha2.mp3";
sounds[15] = "./soundsVT/sounds(lesson25)/mang2guo3.mp3";
sounds[16] = "./soundsVT/sounds(lesson25)/bao1.mp3";
sounds[17] = "./soundsVT/sounds(lesson25)/mu4gua1.mp3";
sounds[18] = "./soundsVT/sounds(lesson25)/guo4.mp3";
sounds[19] = "./soundsVT/sounds(lesson25)/bo1luo2.mp3";
sounds[20] = "./soundsVT/sounds(lesson25)/su4liao4dai4.mp3";
sounds[21] = "./soundsVT/sounds(lesson25)/shu2.mp3";
sounds[22] = "./soundsVT/sounds(lesson25)/dian3xin1.mp3";
sounds[23] = "./soundsVT/sounds(lesson25)/cao3mei2.mp3";
sounds[24] = "./soundsVT/sounds(lesson25)/cha2ye4.mp3";
sounds[25] = "./soundsVT/sounds(lesson25)/mi3.mp3";
sounds[26] = "./soundsVT/sounds(lesson25)/mai4cai4de.mp3";
sounds[27] = "./soundsVT/sounds(lesson25)/xi1gua1.mp3";
sounds[28] = "./soundsVT/sounds(lesson25)/suan1nai3.mp3";

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
