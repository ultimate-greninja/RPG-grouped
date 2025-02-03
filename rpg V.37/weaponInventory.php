<?php
include "inc/header.php";
include "config/database.php";

$sqlWeaponGet = "SELECT * FROM `weapon inventory` WHERE userId = $userId";

$weaponsGet = mysqli_query($conn,$sqlWeaponGet);

$weapons = mysqli_fetch_assoc($weaponsGet);

?>



<?php include "inc/footer.php";?>