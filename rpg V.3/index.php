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
    <p id = "data" hidden><?php echo $data?></p>
    <p id = "userGold" hidden>1000</p>
    <p id = "userLv" hidden>1</p>
    <p id = "amountPulled" hidden>0</p>
    <p id = "exp" hidden>1</p>
    <!-- prints line by line -->
    <?php
    $myfile = fopen("ideas.txt", "r") or die("Unable to open file!");
    while (!feof($myfile)) {
        echo fgets($myfile) . "<br>"; 
    }
    fclose($myfile);
    ?>
    <!-- prints line by line -->

    <p>you have unlocked a (rarity here) (weapon type here)</p>
    <p>(power here) (durability here)</p>
    <p>(effect or curse here)</p>
    <input type="button" onclick="weaponRoll()" value="continue"/>

    <script src = "scripts/rpg.js"></script>
</body>
</html>