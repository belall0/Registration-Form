<?php
include ("./DB_Ops.php");
$username = $_GET['username'];


$sql = "SELECT id FROM data WHERE username = '$username'";
$result = $conn->query($sql);

if (mysqli_num_rows($result) > 0) {
  $result = "taken";
} else {
  $result = "available";
}


$array = [];
$array[] = $result;

echo json_encode($array);