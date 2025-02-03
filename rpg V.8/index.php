<?php
$myfile = fopen("ideas.txt", "r") or die("Unable to open file!");

$data = fread($myfile,filesize("ideas.txt"));

fclose($myfile);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p></p>
    <div id = "data" hidden><?php echo $data?></div>
    <div id = "userGold" >0</div>
    <div id = "userLv" >2</div>
    <div id = "amountPulled" >0</div>
    <div id = "exp" >100</div>
    <div id = "EnemyHealth">0</div>
    <div id = "WR"></div>
    <div id = "TS"></div>
    <div id = "WP"></div>
    <div id = "AS"></div>
    <div id = "WD"></div>
    <div id = "E"></div>
    <div id = "C"></div>
    <div id = "UW"></div>
    <div id = "SP"></div>
    <div id = "BA">false</div>
    <div id = "PA">false</div>
    <div id = "DA">false</div>
    <!-- prints line by line -->
    <?php
    // $myfile = fopen("ideas.txt", "r") or die("Unable to open file!");
    // while (!feof($myfile)) {
    //     echo fgets($myfile) . "<br>"; 
    // }
    // fclose($myfile);
    ?>
    <!-- prints line by line -->
    
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
    <script src = "scripts/rpg.js"></script>
</body>
</html>