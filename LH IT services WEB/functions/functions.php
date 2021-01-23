<?php 
	function show_year(){
		$year = date('Y');
		if($year == 2018){
			echo $year;
		}
		else {
			echo '2018-'.$year;
		}
	}
?>
