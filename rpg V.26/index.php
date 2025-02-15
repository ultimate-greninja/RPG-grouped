
<?php
require "config/database.php";
$cookieName = "userId";
  if (!isset($_COOKIE[$cookieName]) || empty($_COOKIE[$cookieName])) {
    header("location:titleScreen.php");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/mystyles.css">
    <title>Document</title>
</head>
<body id = "textChange">

  <!-- bootstrap -->
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="img/placeholder.png" style = "width:50%; height:50%;" alt="Logo" width="30" height="24">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Character</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Forging</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Achievements</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Weapons</a></li>
            <li><a class="dropdown-item" href="#">Armour</a></li>
            <li><a class="dropdown-item" href="#">Forging Materials</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="logout.php">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- bootstrap -->
  <div>
    <?php

      $userId = $_COOKIE["userId"];

      $sql = "SELECT weaponId FROM user WHERE userId = $userId";

      $currentWeaponId = mysqli_query($conn,$sql);

      $row = mysqli_fetch_assoc($currentWeaponId); 

      $currentWeaponIdValue = $row['weaponId'];

      $sql = "SELECT * FROM `weapon inventory` WHERE weaponId = $currentWeaponIdValue";

      $currentWeapon = mysqli_query($conn,$sql);

      $weaponValues = mysqli_fetch_assoc($currentWeapon);
      
      $weaponName = $weaponValues["weaponName"];
      $weaponRarity = $weaponValues["weaponRarity"];
      $typeStore = $weaponValues["weaponType"];
      $weaponPower = $weaponValues["weaponPower"];
      $attackSpeed = $weaponValues["attackSpeed"];
      $weaponDurability = $weaponValues["weaponDurability"];
      $effect = $weaponValues["effect"];
      $curse = $weaponValues["curse"];
      $worthyness = $weaponValues["worthyness"];
      $sellPrice = $weaponValues["sellPrice"];


      if (isset($_COOKIE["sellPrice"]) && isset($_COOKIE["weaponRarity"]) && isset($_COOKIE["weaponPower"]) && isset($_COOKIE["typeStore"]) && isset($_COOKIE["attackSpeed"]) && isset($_COOKIE["effect"]) && isset($_COOKIE["worthyness"]) && isset($_COOKIE["weaponDurability"]) && isset($_COOKIE["curse"])){
        $weaponName = $_COOKIE["weaponName"];
        $weaponRarity = $_COOKIE["weaponRarity"];
        $typeStore = $_COOKIE["typeStore"];
        $weaponPower = $_COOKIE["weaponPower"];
        $attackSpeed = $_COOKIE["attackSpeed"];
        $weaponDurability = $_COOKIE["weaponDurability"];
        $effect = $_COOKIE["effect"];
        $curse = $_COOKIE["curse"];
        $worthyness = $_COOKIE["worthyness"];
        $sellPrice = $_COOKIE["sellPrice"];

        // setcookie("weaponRarity","",time()-86400000);
        // setcookie("typeStore","",time()-86400000);
        // setcookie("weaponPower","",time()-86400000);
        // setcookie("attackSpeed","",time()-86400000);
        // setcookie("weaponDurability","",time()-86400000);
        // setcookie("effect","",time()-86400000);
        // setcookie("curse","",time()-86400000);
        // setcookie("worthyness","",time()-86400000);
        // setcookie("sellPrice","",time()-86400000);
          
      }
      
      // WEAPON Name
      echo '<div id = "WN">' . $weaponName . '</div>';
      // WEAPON RARITY
      echo '<div id = "WR">' . $weaponRarity . '</div>';
      // TYPE STORE
      echo '<div id = "TS">' . $typeStore . '</div>';
      // WEAPON POWER STORE
      echo '<div id = "WP">' . $weaponPower . '</div>';
      // ATTACK SPEED
      echo '<div id = "AS">' . $attackSpeed . '</div>';
      // WEAPON DURABILITY
      echo '<div id = "WD">' . $weaponDurability . '</div>';
      // EFFECT
      echo '<div id = "E">' . $effect . '</div>';
      // CURSE
      echo '<div id = "C">' . $curse . '</div>';
      // UNWORTHY
      echo '<div id = "UW">' . $worthyness . '</div>';
      // SELL PRICE
      echo '<div id = "SP">' . $sellPrice . '</div>';
    
      
    ?>
    <p></p>
    <div>max health</div>
    <div id = "maxUserHealth">100</div>
    <div>.</div>
    <div>user health</div>
    <div id = "userHealth">100</div>
    <div>.</div>
    <div>user gold</div>
    <div id = "userGold" >0</div>
    <div>.</div>
    <div>user level</div>
    <div id = "userLv" >1</div>
    <div>.</div>
    <div>amount pulled</div>
    <div id = "amountPulled" >0</div>
    <div>.</div>
    <div>exp</div>
    <div id = "exp" >0</div>
    <div>.</div>
    <div>enemy health</div>
    <div id = "EnemyHealth">0</div>
    <div>.</div>
    <div>enemy attack</div>
    <div id = "EnemyAttack">0</div>
    <div>.</div>
    <div>enemy speed</div>
    <div id = "EnemySpeed">10</div>
    <div>.</div>
    <div>enemy race</div>
    <div id = "EnemyRace">none</div>
    <div>.</div>
    <!-- <div>weapon stats</div> -->

    <!-- WEAPON RARITY
    <div id = "WR"><?php // echo "$weaponRarity"; ?></div>
    TYPE STORE
    <div id = "TS"><?php // echo "$typeStore"; ?></div>
    WEAPON POWER STORE
    <div id = "WP"><?php // echo "$attackSpeed"; ?></div>
    ATTACK SPEED
    <div id = "AS"><?php // echo "$attackSpeed"; ?></div>
    WEAPON DURABILITY
    <div id = "WD"><?php // echo "$weaponDurability"; ?></div>
    EFFECT
    <div id = "E"><?php // echo "$effect"; ?></div>
    CURSE
    <div id = "C"><?php // echo "$curse"; ?></div>
    UNWORTHY
    <div id = "UW"><?php // echo "$worthyness"; ?></div>
    SELL PRICE
    <div id = "SP"><?php // echo "$sellPrice"; ?></div> -->
    
    <!--BURN ACTIVE-->
    <div id = "BA">false</div>
    <!--POISON ACTIVE-->
    <div id = "PA">false</div>
    <!--DECAY ACTIVE-->
    <div id = "DA">false</div>
    <!--ENEMY BURN ACTIVE-->
    <div id = "EBA">false</div>
    <!--ENEMY POISON ACTIVE-->
    <div id = "EPA">false</div>
    <!--ENEMY DECAY ACTIVE-->
    <div id = "EDA">false</div>
    <!-- SA = Stop Attack -->
    <div id = "SA" >true</div>
    
    
    <div id = "RT">
      <p>you have unlocked a (rarity here) (weapon type here)</p>
    </div>
    <div id = "PAD">
      <p>(power here) (attack speed here) (durability here)</p>
    </div>
    <div id = "ECW" >
      <p>(effect, curse and unworthy here)</p>
    </div>
    <div id = "Price">
      <p>price here</p>
    </div>
    <input type="button" onclick= "weaponRoll()" value="Weapon roll"/>
    <input type="button" onclick= "weaponRoll()"  value="Armour roll (WIP)"/><!--onclick= "armourRoll()"-->
    <div id = "swing">
      <input id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>
    </div>
    <div id = "sell">
      <input id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src = "scripts/rpg.js"></script>
  </div>
</body>
</html>