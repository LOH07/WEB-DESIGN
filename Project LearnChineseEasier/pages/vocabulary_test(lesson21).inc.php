<script type="text/javascript" src="./js/vocabularyTest(lesson21).js"></script>	
	
	<h1 id="Title">Welcome to Vocabulary Test!</h1> 
	
	<div id="div1">
		<?php include('includes/message_VocabTest.php'); ?>
		<a id="a1" href="http://www.chinesemadeeasier.com" target="_blank">Chinese Made Easier lesson 21</a>
		<br/><a id="a2" href="http://www.chinesemadeeasier.com" target="_blank"><img src="./imagesVT/cme1.jpg"/><img src="./imagesVT/cme2.jpg"/><img src="./imagesVT/cme3.jpg"/><img src="./imagesVT/cme4.jpg"/><img src="./imagesVT/cme5.jpg"/></a>
	</div>
		
	<table> 
		<tr> 
			<td id="td1"></td> 
		</tr> 
		<tr> 
			<td id="td2">Type your answer in the box below!<br>Please use <span>Pinyin</span><br> example: wo3
				<div id="userArea"> 
				 	<a id="listen" href="#" target="_blank">listen</a> 
					<input id="userInput" type="text"/> 
					<input id="submit" type="button" value="submit your answer" onclick="evalAnswer();"/> 
				</div> 
			</td> 
		</tr> 
	</table>
