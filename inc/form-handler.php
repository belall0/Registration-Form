<?php
// include the database operations
include("./DB_Ops.php");

// define form variables
$fullname = $username = $email = $date = $phone = $address = $password = $file = "";

// check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == "POST") {
  // get the form data
  $fullname = $_POST["fullname"];
  $username = $_POST["username"];
  $email = $_POST["email"];
  $date = $_POST["date"];
  $phone = $_POST["phone"];
  $address = $_POST["address"];
  $password = $_POST["password"];
  $file = $_FILES["file"];

  // get the image name
  $fileExt = pathinfo($file["name"], PATHINFO_EXTENSION);
  $imageName = $username . "." . $fileExt; // e.g. belall0.jpg

    // define the image path
  $finalImagePath = "../user-images/" . $imageName;


  // move the image to the user-images folder
  $isImageMoved =move_uploaded_file($file["tmp_name"], $finalImagePath);

  // insert the data into the database
  $sql = "INSERT INTO data ( name, username, email, birthday, phone, address, password, imgpath) VALUES ('$fullname','$username','$email','$date','$phone','$address','$password','$finalImagePath')";

  // check if the query is executed successfully
  if (mysqli_query($conn, $sql)) {
    echo "<h1>Inserted Data:</h1> "."<br>";
    echo "Full Name: ".$fullname."<br>";
    echo "Username: ".$username."<br>";
    echo "Email: ".$email."<br>";
    echo "Date: ".$date."<br>";
    echo "Phone: ".$phone."<br>";
    echo "Address: ".$address."<br>";
    echo "Password: ".$password."<br>";
    echo "Image Path: ".$finalImagePath."<br>";
  } else {
    echo 'Error: ' . mysqli_error($conn);
  }
}
