<!-- login and register -->
<?php
    $cookieName = "emailAlreadyInUse";
    if (isset($_COOKIE[$cookieName])) {
        echo "$_COOKIE[$cookieName] is already in use";
        setcookie("emailAlreadyInUse","",time()-(86400*30));
    }
    if (isset($_COOKIE["AccountDontExist"])) {
        echo "Account doesn't exist";
        setcookie("AccountDontExist","",time()-(86400*30));
    }
    if (isset($_COOKIE["passwordIncorrect"])) {
        echo "Incorrect password";
        setcookie("passwordIncorrect","",time()-(86400*30));
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
    <title>RPG CLICKER</title>
    <link rel="shortcut icon" href="img/kitsune_altered_colour_V.2-Right.png" type="image/x-icon">
</head>
<body>
    <img id = "town_img" src="img/town.jpg" alt="pixel town">

    <?php
        // Check if the form is submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Check which button is clicked
            if (isset($_POST["register"])) {
                register();
            } elseif (isset($_POST["login"])) {
                login();
            }
        }

        // Define the PHP functions
        function register() {
            echo "register";
            header("location:register.php");    }

        function login() {
            echo "login";
            header("location:login.php");    }
   ?>

    <!-- HTML form with two buttons -->
    <form id = "choiceButtons" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input id = "reg" type="submit" name="register" value="REGISTER"></input>
        <input id = "log" type="submit" name="login" value="LOG IN"></input>
    </form>
</body>
</html>