<?php
// define database connection parameters
define("DB_HOST", "localhost");
define("DB_USER", "belal");
define("DB_PASS", "1234");
define("DB_NAME", "users");

// create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// check the connection
if ($conn->connect_error) {
  die("Connection Field" . $conn->connect_error);
}