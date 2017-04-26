<?php
	if (isset($_GET["input"]) && isset($_GET["prompt"])) {
		$prompt = $_GET["prompt"]; 
		$word = $_GET["input"];
		file_put_contents("data/word_cloud_data_".$prompt.".txt", $word."\n", FILE_APPEND | LOCK_EX);
	}
?>
