<?php
    ob_start();

    include "inc/header.php";

    $pageLimit = 1;
    $loop = 0;
    $start = 0;
    if (!isset($_GET['next']) && !isset($_GET['back'])) {
        $page = 1;
    } else if (isset($_GET['next'])) {
        $page = $_GET['page'];  // Increment the page number
    } else if (isset($_GET['back'])) {
        $page = max(1, $_GET['page']);  // Decrement and ensure it doesn't go below 1
    }

    if (isset($_GET['next']) || isset($_GET['back'])){
        $start = ($page - 1) * 21;
    }
    
    $sqlWeaponGet = "SELECT * FROM `weapon inventory` WHERE userId = $userId ORDER BY weaponRarityNum DESC LIMIT 21 OFFSET " . max(0, $start);

    $weaponsGet = mysqli_query($conn,$sqlWeaponGet);

    $totalCountQuery = "SELECT COUNT(*) as total FROM `weapon inventory` WHERE userId = $userId";
    $totalCountResult = mysqli_query($conn, $totalCountQuery);
    $totalCount = mysqli_fetch_assoc($totalCountResult)['total'];
    $pageLimit = ceil($totalCount / 21);
    $traversalButtonsAmount = 0;
    
    if ($page > $pageLimit){
        $page = $pageLimit;
    }


    // $sqlCurrentWeapon = "SELECT weaponId FROM user WHERE userId = $userId";
    // $currentWeapon = mysqli_query($conn,$sqlCurrentWeapon);

    // $sqlEffectCheck = "SELECT effect FROM `weapon inventory` WHERE weaponId = $currentWeapon";
    // $effectCheck = mysqli_query($conn,$sqlEffectCheck);
    // $eCheck = mysqli_fetch_assoc($effectCheck);
    ?><!-- <script>console.log(<?php //echo $eCheck ?>)</script> --><?php

    //not even doing it
    if (isset($_POST['weaponId'])){
        $weaponId = $_POST['weaponId'];
        $sqlUserWeaponUpdate = "UPDATE user SET weaponId = $weaponId WHERE userId = $userId";
        $userWeaponUpdate = mysqli_query($conn,$sqlUserWeaponUpdate);
    }
    while ($weapons = mysqli_fetch_assoc($weaponsGet)){
        $loop++;
        $traversalButtonsAmount++;
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
        $weaponId = $weapons["weaponId"];

        if ($worthyness == 'false'){
            $worthyness = 'worthy';
        }

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
            ?><div id = "<?php echo "$position" ?>"><!-- placeholder is 275x183 -->
                <p>////////////////////////////////////////////////////////</p><?php
                echo '<img src="img/placeholder.png" alt="'. $weaponName .'"><p></p> weapon name: '. $weaponName .' <p></p> weapon rarity: '. $weaponRarity .' <p></p> weapon type: '. $typeStore .' <p></p> weapon power: '. $weaponPower .' <p></p> weapon durability: '. $weaponDurability .' <p></p> attack speed: '. $attackSpeed .' <p></p> effect: '. $effect .' <p></p> curse: '. $curse .' <p></p> worthyness: '. $worthyness .' <p></p> sell price: '. $sellPrice .' <p></p>'; 
            ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "POST">
                <div hidden value = <?php echo "$weaponId" ;?> name = "weaponId"></div>  
                <button id = "equip" name = "weaponId" value = "<?php echo $weaponId ?>">EQUIP</button>
            </form>
            <p>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
            </div>
            <?php   
        } //have worthy checked so you cant equip an unworthy item
    }
    $traversalButtonsAmount = ceil($traversalButtonsAmount/3);
    if ($traversalButtonsAmount == 1){
        $traversalButtons = "traversalButtonsOne";
    }
    else if ($traversalButtonsAmount == 2){
        $traversalButtons = "traversalButtonsTwo";
    }
    else if ($traversalButtonsAmount == 3){
        $traversalButtons = "traversalButtonsThree";
    }
    else if ($traversalButtonsAmount == 4){
        $traversalButtons = "traversalButtonsFour";
    }
    else if ($traversalButtonsAmount == 5){
        $traversalButtons = "traversalButtonsFive";
    }
    else if ($traversalButtonsAmount == 6){
        $traversalButtons = "traversalButtonsSix";
    }
    else if ($traversalButtonsAmount == 7){
        $traversalButtons = "traversalButtonsSeven";
    }
    else{
        $traversalButtons = "traversalButtons";
    }
    setcookie("weaponInventoryPosition",$traversalButtonsAmount,time() + (86400 * 30), "/");
    ?><div id = "<?php echo $traversalButtons ?>"><?php
        echo "$page / $pageLimit";
        if ($page == 1 && $page != $pageLimit) {
            ?>
            <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
                <button type = "submit" id = "forwardCenter" name = "next" value = "true">NEXT</button>
                <input type="hidden" name="page" value="<?php echo $page + 1; ?>">
            </form><?php
        } else if ($page == $pageLimit && $page != 1) {
            ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
                <button type = "submit" id = "backwardCenter" name = "back" value = "true">BACK</button>
                <input type="hidden" name="page" value="<?php echo $page - 1; ?>">
            </form><?php
        } else {
            ?><form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
                <button type = "submit" id = "backward" name = "back" value = "true">BACK</button>
                <input type="hidden" name="page" value="<?php echo $page - 1; ?>">
            </form>
            <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "GET">
                <button type = "submit" id = "forward" name = "next" value = "true">NEXT</button>
                <input type="hidden" name="page" value="<?php echo $page + 1; ?>">
            </form><?php
        }
        ?>
    </div>




<?php 
if (!isset($_COOKIE["weaponInventoryPosition"])) {
    echo "<script>location.reload()</script>";
}
include "inc/footer.php";
ob_end_flush();
?>
