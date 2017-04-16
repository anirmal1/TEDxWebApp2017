<?php
	if (isset($_GET["yesAnd"])) {
		$word = $_GET["yesAnd"];
		file_put_contents("data/word_cloud_data.txt", $word."\n", FILE_APPEND | LOCK_EX);
	}
?>
