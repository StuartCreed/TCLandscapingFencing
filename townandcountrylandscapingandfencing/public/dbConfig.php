<?php

$conn=mysqli_connect("sql5c50c.megasqlservers.eu","tclandscap486749","3uZrgHrd5PZIpef","TownAndCountryLandscapingAndFencing_tclandscap486749");

if(!$conn)
{
die("Connection failed: " . mysqli_connect_error());
}
else {
    echo "Connection successful to SQL Database using mysqliconnect";
}

?>
