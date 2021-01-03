<?php include('includes/header.php'); ?>
<!-- END of #header -->

<div id="content"><!-- this is the #content -->
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
</div><!-- END of #content -->

<!-- this is the #footer(footer.php) -->
<?php include('includes/footer.php'); ?>
<!-- END of #footer -->
