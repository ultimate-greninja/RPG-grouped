
<?php
  include "inc/header.php";
  
  if (isset($_COOKIE["enemyRace"]) && isset($_COOKIE["enemyAttackSpeed"]) && isset($_COOKIE["enemyAttack"]) && isset($_COOKIE["enemyHealth"]) && isset($_COOKIE["enemyMaxHealth"])){
    $enemyRace = $_COOKIE["enemyRace"];
    $enemyMaxHealth = $_COOKIE["enemyMaxHealth"];
    $enemyHealth = $_COOKIE["enemyHealth"];
    $enemyAttack = $_COOKIE["enemyAttack"];
    $enemyAttackSpeed = $_COOKIE["enemyAttackSpeed"];

    $sqlEnemy = "INSERT INTO enemy (userId, enemyRace, enemyMaxHealth, enemyHealth, enemyAttack, enemyAttackSpeed) VALUES($userId, '$enemyRace', $enemyMaxHealth, $enemyHealth, $enemyAttack, $enemyAttackSpeed)";
    $enemyInsert = mysqli_query($conn,$sqlEnemy);
  }
  else{
    $sqlEnemyId = "SELECT * FROM `enemy` WHERE defeated = 0";
    $enemyIdList = mysqli_query($conn,$sqlEnemyId);
    $enemyId = mysqli_fetch_assoc($enemyIdList);
    $enemyRace = $enemyId["enemyRace"];
    $enemyMaxHealth = $enemyId["enemyMaxHealth"];
    $enemyHealth = $enemyId["enemyHealth"];
    $enemyAttack = $enemyId["enemyAttack"];
    $enemyAttackSpeed = $enemyId["enemyAttackSpeed"];
    //database one here
    setCookie("enemyRace",$enemyRace,time()-86400000);
    setCookie("enemyMaxHealth",$enemyMaxHealth,time()-86400000);
    setCookie("enemyHealth",$enemyHealth,time()-86400000);
    setCookie("enemyAttack",$enemyAttack,time()-86400000);
    setCookie("enemyAttackSpeed",$enemyAttackSpeed,time()-86400000);
  }
  //Enemy Race 
  echo '<div id = "EnemyRace">' . $enemyRace . '</div>';
  // Max Enemy Race
  echo '<div id = "maxEnemyHealth">' . $enemyMaxHealth . '</div>';
  // Enemy Health
  echo '<div id = "enemyHealth">' . $enemyHealth . '</div>';
  // Enemy Attack
  echo '<div id = "enemyAttack">' . $enemyAttack . '</div>';
  // Enemy Attack Speed
  echo '<div id = "enemySpeed">' . $enemyAttackSpeed . '</div>';  

  $enemyHealthPercent = ($enemyHealth/$enemyMaxHealth)*100;

  echo '<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id = "enemyHealthBar">
          <div class="progress-bar bg-danger text-dark" style="width:' . "$enemyHealthPercent" .'%"></div>
        </div>';
  echo "<div id = enemyHealthBar> $enemyHealth/$enemyMaxHealth </div>";

  $enemyImg = "placeholder.png";
    
  if ($enemyRace == "Goblin"){
    $enemyImg = "placeholder.png";//replace with goblin sprite
  }
  else if ($enemyRace == "Goblin Chief"){
    $enemyImg = "placeholder.png";//replace with goblin chief sprite
  }
  else if ($enemyRace == "Orc"){
    $enemyImg = "placeholder.png";//replace with orc sprite
  }
  else if ($enemyRace == "Orc Warlord"){
    $enemyImg = "placeholder.png";//replace with orc warlord sprite
  }
  else if ($enemyRace == "Kobold"){
    $enemyImg = "placeholder.png";//replace with kobold sprite
  }
  else if ($enemyRace == "Kobold Shaman"){
    $enemyImg = "placeholder.png";//replace with kobold shaman sprite
  }
  else if ($enemyRace == "Undead"){
    $enemyImg = "placeholder.png";//replace with undead sprite
  }
  else if ($enemyRace == "Lich"){
    $enemyImg = "placeholder.png";//replace with lich sprite
  }
  else if ($enemyRace == "Gnoll"){
    $enemyImg = "placeholder.png";//replace with gnoll sprite
  }
  else if ($enemyRace == "Gnoll Cheiftain"){
    $enemyImg = "placeholder.png";//replace with gnoll cheiftain sprite
  }
  else if ($enemyRace == "Dark Elf"){
    $enemyImg = "placeholder.png";//replace with dark elf sprite
  }
  else if ($enemyRace == "Dark Elf High Priest"){
    $enemyImg = "placeholder.png";//replace with dark elf high priest sprite
  }
  else if ($enemyRace == "Dark Elf High Preistess"){
    $enemyImg = "placeholder.png";//replace with dark elf high priestess sprite
  }
  else if ($enemyRace == "Hobgoblin"){
    $enemyImg = "placeholder.png";//replace with hobgoblin sprite
  }
  else if ($enemyRace == "Hobgoblin Warlord"){
    $enemyImg = "placeholder.png";//replace with hobgoblin warlord sprite
  }
  else if ($enemyRace == "Demon"){
    $enemyImg = "placeholder.png";//replace with demon sprite
  }
  else if ($enemyRace == "Demon Overlord"){
    $enemyImg = "placeholder.png";//replace with demon overlord sprite
  }
  else if ($enemyRace == "Troll"){
    $enemyImg = "placeholder.png";//replace with troll sprite
  }
  else if ($enemyRace == "Troll King"){
    $enemyImg = "placeholder.png";//replace with troll king sprite
  }
  else if ($enemyRace == "Dragon"){
    $enemyImg = "placeholder.png";//replace with dragon sprite
  }
  else if ($enemyRace == "Ancient Dragon"){
    $enemyImg = "placeholder.png";//replace with ancient sprite
  }
  else{
    $enemyImg = "none";
  }

  echo '<img id = "enemyImg" src="img/'. $enemyImg .'" alt="'. $enemyRace .'">';
  
  
  if (isset($_COOKIE["weaponEquipFists"])){//123456789
    $sqlFistWeaponId = "SELECT * FROM `weapon inventory` WHERE userId = $userId";

    $weaponIds = mysqli_query($conn,$sqlFistWeaponId);
    $found = false;
    while ($fistWeapon = mysqli_fetch_assoc($weaponIds)){
      if ($fistWeapon["weaponName"] == "Fists"){
        $fistWeaponId = $fistWeapon["weaponId"];
        $found = true;
      }
      else if ($found == false){
        $fistWeaponId = "";
      }
    }
    

    $sqlWeaponId ="SELECT * FROM user WHERE userId = $userId";

    $currentUser = mysqli_query($conn,$sqlWeaponId);

    $user = mysqli_fetch_assoc($currentUser);

    $weaponId = $user["weaponId"];

    $userUpdate = "UPDATE user SET weaponId = $fistWeaponId WHERE userId = $userId";

    $fistEquip = mysqli_query($conn,$userUpdate);

    $sqlWeaponBroke = "DELETE FROM `weapon inventory` WHERE weaponId = $weaponId";

    $weaponDelete = mysqli_query($conn,$sqlWeaponBroke);

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
    setcookie("broke","",time()-(86400 * 30));
  }
  if (isset($_COOKIE["sellPrice"]) && isset($_COOKIE["weaponRarity"]) && isset($_COOKIE["weaponPower"]) && isset($_COOKIE["typeStore"]) && isset($_COOKIE["attackSpeed"]) && isset($_COOKIE["effect"]) && isset($_COOKIE["worthyness"]) && isset($_COOKIE["weaponDurability"]) && isset($_COOKIE["curse"]) && isset($_COOKIE["levelUnlock"])){
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
    $weaponRarityNum = $_COOKIE["weaponRarityNum"];

    $sqlAddWeapon = "INSERT INTO `weapon inventory` (userId, weaponName, weaponRarity, weaponType, weaponPower, attackSpeed, weaponDurability, effect, curse, worthyness, levelUnlock, sellPrice, weaponRarityNum) VALUES($userId, '$weaponName', '$weaponRarity', '$typeStore', $weaponPower, $attackSpeed, $weaponDurability, '$effect', '$curse', '$worthyness', $levelUnlock, $sellPrice, $weaponRarityNum)";
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
    setcookie("weaponRarityNum","",time()-(86400 * 30));
  }


  if (isset($_COOKIE["maxUserHealth"]) && isset($_COOKIE["userHealth"]) && isset($_COOKIE["gold"]) && isset($_COOKIE["userLv"]) && isset($_COOKIE["exp"]) && isset($_COOKIE["amountPulled"])){
    $maxUserHealth = $_COOKIE["maxUserHealth"];
    $userHealth = $_COOKIE["userHealth"];
    $gold = $_COOKIE["gold"];
    $userLv = $_COOKIE["userLv"];
    $exp = $_COOKIE["exp"];
    $amountPulled = $_COOKIE["amountPulled"];

    $MUHsql = "UPDATE user SET maxHealth = $maxUserHealth WHERE userId = $userId";
    $MUHresult = mysqli_query($conn,$MUHsql);
    $UHsql = "UPDATE user SET currentHealth = $userHealth WHERE userId = $userId";
    $UHresult = mysqli_query($conn,$UHsql);
    $Gsql = "UPDATE user SET gold = $gold WHERE userId = $userId";
    $Gresult = mysqli_query($conn,$Gsql);
    $ULsql = "UPDATE user SET userLv = $userLv WHERE userId = $userId";
    $ULresult = mysqli_query($conn,$ULsql);
    $Esql = "UPDATE user SET `exp` = $exp WHERE userId = $userId"; 
    $Eresult = mysqli_query($conn,$Esql);
    $APsql = "UPDATE user SET amountPulled = $amountPulled WHERE userId = $userId";
    $APresult = mysqli_query($conn,$APsql);
    //sql 
  }
  if (isset($_COOKIE["ore"])){
    $sqlGetForge = "SELECT * FROM forging_material_inventory WHERE userId = $userId";
    $forgeResult = mysqli_query($conn,$sqlGetForge);
    $forge = mysqli_fetch_assoc($forgeResult);
    $ironite = $forge["ironite"];
    $steelite = $forge["steelite"];
    $silverium = $forge["silverium"];
    $goldforge = $forge["goldforge"];
    $platinum = $forge["platinum"];
    $mythril = $forge["mythril"];
    $stardustium = $forge["stardustium"];
    $etherium = $forge["etherium"];
    $celestium = $forge["celestium"];
    $astralium = $forge["astralium"];
    $omniite = $forge["omniite"];
    $numinite = $forge["numinite"];

    if ( $_COOKIE["ore"] == "ironite"){
      $ironite = $ironite++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET ironite = $ironite WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "steelite"){
      $steelite = $steelite++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET steelite = $steelite WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "silverium"){
      $silverium = $silverium++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET silverium = $silverium WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "goldforge"){
      $goldforge = $goldforge++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET goldforge = $goldforge WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "platinum"){
      $platinum = $platinum++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET platinum = $platinum WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "mythril"){
      $mythril = $mythril++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET mythril = $mythril WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "stardustium"){
      $stardustium = $stardustium++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET stardustium = $stardustium WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "etherium"){
      $etherium = $etherium++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET etherium = $etherium WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "celestium"){
      $sqlUpdateForge = "UPDATE forging_material_inventory SET celestium = $celestium WHERE userId = $userId";
      $celestium = $celestium++;
    }
    else if ( $_COOKIE["ore"] == "astralium"){
      $astralium = $astralium++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET astralium = $astralium WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "onmite"){
      $omniite = $omniite++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET omniite = $omniite WHERE userId = $userId";
    }
    else if ( $_COOKIE["ore"] == "numinite"){
      $numinite = $numinite++;
      $sqlUpdateForge = "UPDATE forging_material_inventory SET numinite = $numinite WHERE userId = $userId";
    }
    else{
      ?><script>
        console.log("no ore this time")
      </script><?php
    }
    $updateForge = mysqli_query($conn,$sqlUpdateForge);
    setcookie("ore","",time()-(86400 * 30));
  }
  if (isset($COOKIE["weaponDurability"])){
    //ignore for now
  }
?>
  <!-- <div id = "coin">
    <img width = 25% id = "goldCoin" src="img/goldCoin.png" alt="coin"></img>
    <p id = "coinAmount">< ?php// echo $coin ?> gold</p>
  </div> 123456789-->
  <!-- <div id = "buttons"> -->
  <div id = "weaponRoll">
    <button id = "weaponRollButton" onclick= "weapon.weaponRoll()" value="Weapon roll">Weapon Roll</button>
  </div>
  <div id = "armourRoll">
    <button id = "armourRollButton" onclick= "weapon.weaponRoll()"  value="Armour roll (WIP)">Armour Roll</button><!--onclick= "armourRoll()"-->
  </div>
  <div id = "swing">
    <button id = "swingButton" onclick= "game.swing()" value="Swing">Attack</button>
  </div>
  <div id = "sell">
    <button id = "sellButton" onclick= "weapon.Sell()" value="Sell">Sell</button>
  </div>
  <div>
    <?php
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
      $level = $user["userLv"];
      $exp = $user["exp"];
      $amountPulled = $user["amountPulled"];
//bitchass cookie thingy mabobs don't work like i want
      // setCookie("maxUserHealth",$maxHealth,time() + 86400000);
      // setCookie("userHealth",$currentHealth,time() + 86400000);
      // setCookie("gold",$gold,time() + 86400000);
      // setCookie("userLv",$level,time() + 86400000);
      // setCookie("exp",$exp,time() + 86400000);
      // setCookie("amountPulled",$amountPulled,time() + 86400000);

      if ($coin !== $gold){
        header("location:index.php");
      }

      $healthPercent = ($currentHealth/$maxHealth)*100;
      
      echo '<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id = "health">
              <div class="progress-bar bg-danger text-dark" style="width:' . "$healthPercent" .'%"></div>
            </div>';
      echo "<div id = 'health'>$currentHealth/$maxHealth</div>";
      echo '<div hidden> username <div>';
      echo '<div id = "username" hidden>' .$username. '</div>';
      echo '<div hidden> max health <div>';
      echo '<div id = "maxUserHealth" hidden>'.$maxHealth. '</div>';
      echo '<div hidden> current health <div>';
      echo '<div id = "userHealth" hidden>'.$currentHealth. '</div>';
      echo '<div hidden> gold <div>';
      echo '<div id = "userGold" hidden>'.$gold. '</div>';
      echo '<div hidden> level <div>';
      echo '<div id = "userLv" hidden>'.$level. '</div>';
      echo '<div hidden> exp <div>';
      echo '<div id = "exp" hidden>'.$exp. '</div>';
      echo '<div hidden> amount pulled <div>';
      echo '<div id = "amountPulled" hidden>'.$amountPulled. '</div>';

      // WEAPON Name
      echo '<div id = "WN" hidden>' . $weaponName . '</div>';
      // WEAPON RARITY
      echo '<div id = "WR" hidden>' . $weaponRarity . '</div>';
      // TYPE STORE
      echo '<div id = "TS" hidden>' . $typeStore . '</div>';
      // WEAPON POWER STORE
      echo '<div id = "WP" hidden>' . $weaponPower . '</div>';
      // ATTACK SPEED
      echo '<div id = "AS" hidden>' . $attackSpeed . '</div>';
      // WEAPON DURABILITY
      echo '<div id = "WD" hidden>' . $weaponDurability . '</div>';
      // EFFECT
      echo '<div id = "E" hidden>' . $effect . '</div>';
      // CURSE
      echo '<div id = "C" hidden>' . $curse . '</div>';
      // UNWORTHY
      echo '<div id = "UW" hidden>' . $worthyness . '</div>';
      // SELL PRICE
      echo '<div id = "SP" hidden>' . $sellPrice . '</div>';
    
      
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

    </div>  
    <div hidden>max enemy health</div>
    <div id = maxEnemyHealth hidden>0</div>
    <!-- <div>.</div> not needed -->
    <div hidden>enemy health</div>
    <div id = "EnemyHealth">0</div>
    <!-- <div>.</div> not needed -->
    <div hidden>enemy attack</div>
    <div id = "EnemyAttack" hidden>0</div>
    <!-- <div>.</div> not needed -->
    <div hidden>enemy speed</div>
    <div id = "EnemySpeed" hidden>10</div>
    <!-- <div>.</div> not needed-->
    <div hidden>enemy race</div>
    <div id = "EnemyRace" hidden>none</div>
    <!-- <div>.</div> not needed-->
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
    <div id = "BA" hidden>false</div>
    <!--POISON ACTIVE-->
    <div id = "PA" hidden>false</div>
    <!--DECAY ACTIVE-->
    <div id = "DA" hidden>false</div>
    <!--ENEMY BURN ACTIVE-->
    <div id = "EBA" hidden>false</div>
    <!--ENEMY POISON ACTIVE-->
    <div id = "EPA" hidden>false</div>
    <!--ENEMY DECAY ACTIVE-->
    <div id = "EDA" hidden>false</div>
    <!-- SA = Stop Attack -->
    <div id = "SA" hidden>true</div>
    
    
    <div id = "RT">
      <p>you have <?php echo "$weaponName";?> equiped</p>
    </div>
    <div id = "PAD">
      <p><?php echo "power: $weaponPower, attack speed: $attackSpeed, durability: $weaponDurability";?></p>
    </div>
    <div id = "ECW" >
      <p><?php echo "effect: $effect, curse: $curse, worthyness: $worthyness";?></p>
    </div>
    <div id = "Price">
      <p><?php echo "Sell Price: $sellPrice";?></p>
    </div>
    
    <script src="rpg oop variant/rpg.js"></script>
    <?php include "inc/footer.php"?>
  </div>
</body>
</html>