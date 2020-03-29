

<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>

<?php
$servername = "sql5c50c.megasqlservers.eu";
$username = "tclandscap486749";
$password = "3uZrgHrd5PZIpef";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed to SQL database: " . $conn->connect_error);
}
echo "Connected successfully to SQL database";
/*
#WAITING FOR SQL QUERY ON PHPMYADMIN TO BE FIXED! TICKET RAISED WITH EASILY.
$sql="CREATE TABLE Comments (Service varchar(255), FirstName varchar(255), LastName varchar(255), Comment text(5000));"
$sql .="SELECT * FROM Comments;"

if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
*/
?>
