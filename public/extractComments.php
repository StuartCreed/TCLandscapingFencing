<?php

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

// Extract new version of database to chow comments on Website
$service = $_GET["Service"];
$sqlExtract = "SELECT ServiceID, Service, FirstName, SecondName, Date, Comment FROM Comments WHERE Service = '$service'";
$result = mysqli_query($conn, $sqlExtract);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = $result->fetch_all();
    echo json_encode($array);
} else {
    echo "No Comments";
}

mysqli_close($conn);

?>
