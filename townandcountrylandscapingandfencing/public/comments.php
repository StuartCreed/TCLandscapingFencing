<!DOCTYPE html>
<html>
<body>

<?php
$servername = "sql5c50c.megasqlservers.eu";
$username = "tclandscap486749";
$password = "3uZrgHrd5PZIpef";
$dbname = "TownAndCountryLandscapingAndFencing_tclandscap486749";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else {
    echo "Connection successful to SQL Database using mysqli";
}

$sql = "SELECT Service, FirstName, SecondName, Date, Comment FROM Comments";
$result = $conn->query($sql);
/*result=null
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"] . "<br>";
    }
} else {
    echo "0 results";
}
*/

$conn->close();
?>

<p>Result is <?php echo $result ?>.</p>
<script>console.log('Result is: " . $result . "' );</script>

</body>
</html>
