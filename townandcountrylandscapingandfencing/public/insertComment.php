<?php

use \Datetime;

$now = new DateTime();
$todayDate = $now->format('Y-m-d');
$FirstNameFromInput = $_POST["FirstName"];
$SecondNameFromInput = $_POST["SecondName"];
$CommentFromInput = $_POST["Comment"];
$Service = $_POST["Service"];
$ServiceID = $_POST["ServiceID"];

$servername = "sql5c50c.megasqlservers.eu";
$username = "tclandscap486749";
$password = "3uZrgHrd5PZIpef";
$dbname = "TownAndCountryLandscapingAndFencing_tclandscap486749";

// Create connection MySQLi Procedural
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert new comment to database
$sql = "INSERT INTO Comments (ServiceID, Service, FirstName, SecondName, Date, Comment)
VALUES ('$ServiceID','$Service', '$FirstNameFromInput', '$SecondNameFromInput', '$todayDate','$CommentFromInput')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>
