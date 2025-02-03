
<?php
  require "config/database.php";
  include "inc/header.php";
  $cookieName = "userId";
  if (!isset($_COOKIE[$cookieName]) || empty($_COOKIE[$cookieName])) {
    setcookie("weaponRarity","",time()-86400000);
    setcookie("typeStore","",time()-86400000);
    setcookie("weaponPower","",time()-86400000);
    setcookie("attackSpeed","",time()-86400000);
    setcookie("weaponDurability","",time()-86400000);
    setcookie("effect","",time()-86400000);
    setcookie("curse","",time()-86400000);
    setcookie("worthyness","",time()-86400000);
    setcookie("sellPrice","",time()-86400000);
    setcookie("weaponName","",time()-86400000);
    setCookie("maxUserHealth","",time()-86400000);
    setCookie("userHealth","",time()-86400000);
    setCookie("gold","",time()-86400000);
    setCookie("userLv","",time()-86400000);
    setCookie("exp","",time()-86400000);
    setCookie("amountPulled","",time()-86400000);
    header("location:titleScreen.php");
  }
  $userId = $_COOKIE["userId"];
  
  if (isset($_COOKIE["enemyRace"]) && isset($_COOKIE["enemyAttackSpeed"]) && isset($_COOKIE["enemyAttack"]) && isset($_COOKIE["enemyHealth"]) && isset($_COOKIE["enemyMaxHealth"])){
    //send enemy data to database
    $enemyRace = $_COOKIE["enemyRace"];
    $enemyMaxHealth = $_COOKIE["enemyMaxHealth"];
    $enemyHealth = $_COOKIE["enemyHealth"];
    $enemyAttack = $_COOKIE["enemyAttack"];
    $enemyAttackSpeed = $_COOKIE["enemyAttackSpeed"];
    
    $sqlEnemy = "INSERT INTO enemy (userId, enemyRace, enemyMaxHealth, enemyHealth, enemyAttack, enemyAttackSpeed) VALUES($userId, '$enemyRace', $enemyMaxHealth, $enemyHealth, $enemyAttack, $enemyAttackSpeed)";
    $enemyInsert = mysqli_query($conn,$sqlEnemy);

    setCookie("enemyRace","",time()-86400000);
    setCookie("enemyMaxHealth","",time()-86400000);
    setCookie("enemyHealth","",time()-86400000);
    setCookie("enemyAttack","",time()-86400000);
    setCookie("enemyAttackSpeed","",time()-86400000);

  }
  
  if (isset($_COOKIE["sellPrice"]) && isset($_COOKIE["weaponRarity"]) && isset($_COOKIE["weaponPower"]) && isset($_COOKIE["typeStore"]) && isset($_COOKIE["attackSpeed"]) && isset($_COOKIE["effect"]) && isset($_COOKIE["worthyness"]) && isset($_COOKIE["weaponDurability"]) && isset($_COOKIE["curse"]) && isset($COOKIE["levelUnlock"])){
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
    $levelUnlock = $_COOKIE["levelUnlock"];

    $sqlAddWeapon = "INSERT INTO `weapon inventory` (userId, weaponName, weaponRarity, weaponType, weaponPower, attackSpeed, weaponDurability, effect, curse, worthyness, levelUnlock, sellPrice) VALUES($userId, '$weaponName', '$weaponRarity', '$typeStore', $weaponPower, $attackSpeed, $weaponDurability, '$effect', '$curse', '$worthyness', $levelUnlock, $sellPrice)";
    $bindingWeaponId = mysqli_query($conn,$sqlAddWeapon);
    if ($curse == "Binding"){
      $sqlGetId = "SELECT * FROM `weapon inventory` WHERE curse = 'Binding' AND userId = $userId";
      $bindingWeaponId = mysqli_query($conn,$sqlGetId);
      $bindingWeapons = mysqli_fetch_assoc($bindingWeaponId);
      $currentWeaponId = $bindingWeapons[0];

      $sqlBinding = "UPDATE user SET weaponId = $currentWeaponId  WHERE userId = $userId";
      $currentWeaponUpdate = mysqli_query($conn,$sqlBinding);
    }
    setcookie("weaponName","",time()-(86400 * 30));
    setcookie("weaponRarity","",time()-(86400 * 30));
    setcookie("typeStore","",time()-(86400 * 30));
    setcookie("weaponPower","",time()-(86400 * 30));
    setcookie("attackSpeed","",time()-(86400 * 30));
    setcookie("weaponPower","",time()-(86400 * 30));
    setcookie("attackSpeed","",time()-(86400 * 30));
    setcookie("weaponDurability","",time()-(86400 * 30));
    setcookie("effect","",time()-(86400 * 30));
    setcookie("curse","",time()-(86400 * 30));
    setcookie("worthyness","",time()-(86400 * 30));
    setcookie("sellPrice","",time()-(86400 * 30));
    setcookie("levelUnlock","",time()-(86400 * 30));
  }
  
  if (isset($COOKIE["maxUserHealth"]) && isset($COOKIE["userHealth"]) && isset($COOKIE["gold"]) && isset($COOKIE["userLv"]) && isset($COOKIE["exp"]) && isset($COOKIE["amountPulled"])){
    $maxUserHealth = $_COOKIE["maxUserHealth"];
    $userHealth = $_COOKIE["userHealth"];
    $gold = $_COOKIE["gold"];
    $userLv = $_COOKIE["userLv"];
    $exp = $_COOKIE["exp"];
    $amountPulled = $_COOKIE["amountPulled"];

    $sql = "UPDATE user SET maxHealth = $maxUserHealth WHERE userId = $userId";
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE user SET currentHealth = $userHealth WHERE userId = $userId";
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE user SET gold = $gold WHERE userId = $userId";
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE user SET userLv = $userLv WHERE userId = $userId";
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE user SET `exp` = $exp WHERE userId = $userId"; 
    $result = mysqli_query($conn,$sql);
    $sql = "UPDATE user SET amountPulled = $amountPulled WHERE userId = $userId";
    $result = mysqli_query($conn,$sql);
    //sql 
  }
?>

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
      
      $sql = "SELECT * FROM user WHERE userId = $userId";

      $currentUser = mysqli_query($conn,$sql);

      $user = mysqli_fetch_assoc($currentUser);

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

      $username = $user["username"];
      $gender = $user["gender"];
      $maxHealth = $user["maxHealth"];
      $currentHealth = $user["currentHealth"];
      $gold = $user["gold"];
      $level = $user["level"];
      $exp = $user["exp"];
      $amountPulled = $user["amountPulled"];
      
      echo '<div> username <div>';
      echo '<div id = "username">' .$username. '</div>';
      echo '<div> max health <div>';
      echo '<div id = "maxUserHealth">'.$maxHealth. '</div>';
      echo '<div> current health <div>';
      echo '<div id = "userHealth">'.$currentHealth. '</div>';
      echo '<div> gold <div>';
      echo '<div id = "userGold">'.$gold. '</div>';
      echo '<div> level <div>';
      echo '<div id = "userLv">'.$level. '</div>';
      echo '<div> exp <div>';
      echo '<div id = "exp">'.$exp. '</div>';
      echo '<div> amount pulled <div>';
      echo '<div id = "amountPulled">'.$amountPulled. '</div>';

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
    <!-- <p></p>
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
    <div>.</div> -->
    <div>max enemy health</div>
    <div id = maxEnemyHealth>0</div>
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
    <?php include "inc/footer.php"?>
  </div>
</body>
</html>