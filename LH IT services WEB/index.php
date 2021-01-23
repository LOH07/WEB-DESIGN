<?php include('sections/header.php'); ?>
<!-- END of #header -->


<!-- START of the #content -->
<div id="content">
	<?php
		$pages_dir = 'pages';
		if(!empty($_GET['p'])){
			$pages = scandir($pages_dir, 0);
			unset($pages[0], $pages[1]);
			//echo '<br/>';
			//print_r($pages);
			
			$p = $_GET['p'];
			if(in_array($p.'.inc.php', $pages)){
				include($pages_dir.'/'.$p.'.inc.php');
			}
			else {
				echo '<br/>'.'<br/>'.'Sorry, page not found.';
			}
		}
		else {
			include($pages_dir.'/home.inc.php');
		}
	?>
</div>
<!-- END of #content -->


<!-- START of the #footer(footer.php) -->
<?php include('sections/footer.php'); ?>
<!-- END of #footer -->
