<?php 
	function show_year(){
		$year = date('Y');
		if($year == 2012){
			echo $year;
		}
		else {
			echo '2012-'.$year;
		}
	}
?>
