<?php
    include "inc/header.php";

    $loop = 0;
    $start = 0;
    $page = 1;
    if(isset($_GET['page'])){
        $page = $_GET['page'];
        $start = $page-1 * 10;
    }

    $sqlWeaponGet = "SELECT * FROM `weapon inventory` WHERE userId = $userId ORDER BY weaponRarityNum DESC LIMIT 21 offset $start";
    $weaponsGet = mysqli_query($conn,$sqlWeaponGet);

    $result = mysqli_query($conn,$sql);
    while ($weapons = mysqli_fetch_assoc($weaponsGet)){
        $loop++;
        ?><script>console.log(<?php echo $loop?>)</script><?php
        $position = "none";
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
        if ($loop == 1){
            $position = "one";
        }
        else if ($loop == 2){
            $position = "two";
        }
        else if ($loop == 3){
            $position = "three";
        }
        else if ($loop == 4){
            $position = "four";
        }
        else if ($loop == 5){
            $position = "five";
        }
        else if ($loop == 6){
            $position = "six";
        }
        else if ($loop == 7){
            $position = "seven";
        }
        else if ($loop == 8){
            $position = "eight";
        }
        else if ($loop == 9){
            $position = "nine";
        }
        else if ($loop == 10){
            $position = "ten";
        }
        else if ($loop == 11){
            $position = "eleven";
        }
        else if ($loop == 12){
            $position = "twelve";
        }
        else if ($loop == 13){
            $position = "thirteen";
        }
        else if ($loop == 14){
            $position = "fourteen";
        }
        else if ($loop == 15){
            $position = "fifthteen";
        }
        else if ($loop == 16){
            $position = "sixteen";
        }
        else if ($loop == 17){
            $position = "seventeen";
        }
        else if ($loop == 18){
            $position = "eighteen";
        }
        else if ($loop == 19){
            $position = "nineteen";
        }
        else if ($loop == 20){
            $position = "twenty";
        }
        else if ($loop == 21){
            $position = "twentyone";
        }
        if ($weaponName != "Fists"){
            ?><div id = "<?php echo "$position" ?>">
                <p>//////////////////////////////////////////////////////////</p><?php
                echo "weapon name: $weaponName <p></p> weapon rarity: $weaponRarity <p></p> weapon type: $typeStore <p></p> weapon power: $weaponPower <p></p> weapon durability: $weaponDurability <p></p> attack speed: $attackSpeed <p></p> effect: $effect <p></p> curse: $curse <p></p> worthyness: $worthyness <p></p> sell price: $sellPrice <p></p>"; 
            ?>  <p>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
            </div>
            <?php   
        }
    }
    if ($page == 1){
        ?><button id = "forward"></button><?php
    }
    else{
        ?><button id = "back"></button>
        <button id = "forward"></button><?php
    }
?>



<?php include "inc/footer.php";?>