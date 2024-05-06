<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "http://localhost/fcai-project/inc/username-validation.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_response = curl_exec($ch);
echo $server_response;

curl_close($ch);