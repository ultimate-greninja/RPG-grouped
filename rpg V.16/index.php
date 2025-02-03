
<?php
  if (count($_COOKIE) <= 0) {
    header("location:titleScreen.php");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/mystyles.css">
    <title>Document</title>
</head>
<body>
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
    <div>weapon stats</div>
    <!--WEAPON RARITY-->
    <div id = "WR"></div>
    <!--TYPE STORE-->
    <div id = "TS"></div>
    <!--WEAPON STORE-->
    <div id = "WP"></div>
    <!--ATTACK SPEED-->
    <div id = "AS"></div>
    <!--WEAPON DURABILITY-->
    <div id = "WD"></div>
    <!--EFFECT-->
    <div id = "E"></div>
    <!--CURSE-->
    <div id = "C"></div>
    <!--UNWORTHY-->
    <div id = "UW"></div>
    <!--SELL PRICE-->
    <div id = "SP"></div>
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
    <div id = "swing">
      <input id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>
    </div>
    <div id = "sell">
      <input id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>
    </div>
    <script src = "scripts/rpg.js"></script>
</body>
</html>