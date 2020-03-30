<html>
<body>

<div>
<?php

use \Datetime;

$now = new DateTime();
$todayDate = $now->format('Y-m-d');
echo $todayDate;
?>
</div>


<div>
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

// Query ERROR RECIEVED SO CONNECTION OK SO TYPO
$sql = "INSERT INTO Comments (Service, FirstName, SecondName, Date, Comment)
VALUES ('John', 'Doe', 'johnexampl', '$todayDate','Comment Test')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>
</div>

</body>
</html>
