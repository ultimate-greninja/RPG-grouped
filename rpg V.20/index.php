
<?php
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
      <ul class="navbar-nav">
        <div>
          <a class="nav-link active" aria-current="page" href="#">Character</a>
        </div>
        <div>
          <a class="nav-link" id = "textChange" href="#">Forging</a>
        </div>
        <div>
          <a class="nav-link" id = "textChange" href="#">Achievements</a>
        </div>
        <div>
          <li class="nav-item dropdown">
        </div>
        <div>
          <a class="nav-link dropdown-toggle" role="button" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Weapons</a></li>
            <li><a class="dropdown-item" href="#">Forging materials</a></li>
            <li><a class="dropdown-item" href="#">Skills</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
  <!-- bootstrap -->

  <div>
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
  </div>
</body>
</html>