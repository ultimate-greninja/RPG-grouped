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
    <div id = "userGold" >1000</div>
    <div id = "userLv" >1</div>
    <div id = "amountPulled" >0</div>
    <div id = "exp" >1</div>
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
    <input type="button" onclick="weaponRoll()" value="Weapon roll"/>
    <div id = fail hidden></div>
    <script src = "scripts/rpg.js"></script>
</body>
</html>