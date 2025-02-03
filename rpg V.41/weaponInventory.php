<?php
    include "inc/header.php";


    $pageLimit = 1;
    $loop = 0;
    $start = 0;
    $page = 1;
    if(isset($_GET['page'])){
        $page = $_GET['page'];
        $start = ($page-1) * 21;
    }
    if ($page > $pageLimit){
        $page = $pageLimit;
    }

    $sqlWeaponGet = "SELECT * FROM `weapon inventory` WHERE userId = $userId ORDER BY weaponRarityNum DESC LIMIT 21 OFFSET $start";

    ?><script>console.log(<?php $userId ?>)</script><?php

    $weaponsGet = mysqli_query($conn,$sqlWeaponGet);

    $result = mysqli_query($conn,$sql);
    $pageLimit = ceil((count(mysqli_fetch_assoc($weaponsGet)))/21);
    $weapons = mysqli_fetch_assoc($weaponsGet);
    if (isset($_POST["one"])) {

    }
    else if (isset($_POST["two"])) {
        
    }
    else if (isset($_POST["three"])) {
        
    }
    else if (isset($_POST["four"])) {
        
    }
    else if (isset($_POST["five"])) {
        
    }
    else if (isset($_POST["six"])) {
        
    }
    else if (isset($_POST["seven"])) {
        
    }
    else if (isset($_POST["eight"])) {
        
    }
    else if (isset($_POST["nine"])) {
        
    }
    else if (isset($_POST["ten"])) {
        
    }
    else if (isset($_POST["eleven"])) {
        
    }
    else if (isset($_POST["twelve"])) {
        
    }
    else if (isset($_POST["thirteen"])) {
        
    }
    else if (isset($_POST["fourteen"])) {
        
    }
    else if (isset($_POST["fifteen"])) {
        
    }
    else if (isset($_POST["sixteen"])) {
        
    }
    else if (isset($_POST["seventeen"])) {
        
    }
    else if (isset($_POST["eighteen"])) {
        
    }
    else if (isset($_POST["nineteen"])) {
        
    }
    else if (isset($_POST["twenty"])) {
        
    }
    else if (isset($_POST["twentyone"])) {
        
    }
    while ($weapons = mysqli_fetch_assoc($weaponsGet)){
        $loop++;
        ?><script>console.log(<?php echo $loop?>)</script><?php
        $position = "none";
        $equip = "equip";
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
            $position = "fifteen";
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
        $equip = $equip.$position;
        if ($weaponName != "Fists"){
            ?><div id = "<?php echo "$position" ?>">
                <p>//////////////////////////////////////////////////////////</p><?php
                echo "weapon name: $weaponName <p></p> weapon rarity: $weaponRarity <p></p> weapon type: $typeStore <p></p> weapon power: $weaponPower <p></p> weapon durability: $weaponDurability <p></p> attack speed: $attackSpeed <p></p> effect: $effect <p></p> curse: $curse <p></p> worthyness: $worthyness <p></p> sell price: $sellPrice <p></p>"; 
            ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "POST">  
                <button id = "equip" name = "<?php echo "$position"?>">EQUIP</button>
            </form>
            <p>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
            </div>
            <?php   
        }
    }
    if ($page == 1 && $page !== $pageLimit){
        ?>
        <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
            <button type = "submit" id = "forward" name = "page" value = <?php echo ($page++); ?>>NEXT</button>
        </form>
        <?php
    }
    else if ($page == $pageLimit) {
        ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
            <button type = "submit" id = "back" name = "page" value = <?php echo ($page--); ?>>BACK</button>
        </form><?php
    }
    else{
        ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
            <button type = "submit" id = "back" name = "page" value = <?php echo ($page--); ?>>BACK</button>
        </form>
        <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
            <button type = "submit" id = "forward" name = "page" value = <?php echo ($page++); ?>>NEXT</button>
        </form><?php
    }
?>



<?php include "inc/footer.php";?>