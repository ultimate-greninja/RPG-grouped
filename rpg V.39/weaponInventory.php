<?php
include "inc/header.php";

$sqlWeaponGet = "SELECT * FROM `weapon inventory` WHERE userId = $userId ORDER BY weaponId";

$weaponsGet = mysqli_query($conn,$sqlWeaponGet);

while ($weapons = mysqli_fetch_assoc($weaponsGet)){
    $weaponName = $weapons["weaponName"];
    $weaponRarity = $weapons["weaponRarity"];
    $typeStore = $weapons["weaponType"];
    $weaponPower = $weapons["weaponPower"];
    $attackSpeed = $weapons["attackSpeed"];
    $weaponDurability = $weapons["weaponDurability"];
    $effect = $weapons["effect"];
    $curse = $weapons["curse"];
    $worthyness = $weapons["worthyness"];
    $sellPrice = $weapons["sellPrice"];
    echo "$weaponName, $weaponRarity, $typeStore, $weaponPower, $weaponDurability, $attackSpeed, $effect, $curse, $worthyness, $sellPrice\n"; 
    ?><div></div><?php   
}
?>



<?php include "inc/footer.php";?>