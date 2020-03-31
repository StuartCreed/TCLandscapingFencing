<!DOCTYPE html>
<html>
<body>

<div>
<?php

use \Datetime;

$now = new DateTime();
$todayDate = $now->format('Y-m-d');
$FirstNameFromInput = $_POST["FirstName"];
$SecondNameFromInput = $_POST["SecondName"];
$CommentFromInput = $_POST["Comment"];
$Service = $_POST["Service"];

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
$sql = "INSERT INTO Comments (Service, FirstName, SecondName, Date, Comment)
VALUES ('$Service', '$FirstNameFromInput', '$SecondNameFromInput', '$todayDate','$CommentFromInput')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>
</div>

<div>
<?php
// Extract new version of database to chow comments on Website
$sqlExtract = "SELECT Service, FirstName, SecondName, Date, Comment FROM Comments";
$result = mysqli_query($conn, $sqlExtract);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "Service: " . $row["Service"]. " - FirstName: " . $row["FirstName"]. " - SecondName: " . $row["SecondName"]. " - Date: " . $row["Date"]. " - Comment: " . $row["Comment"]."<br>" ;
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>
</div>


<div>
<?php
echo "Service Recieved is: " . $Service
?>
</div>
</body>
</html>
