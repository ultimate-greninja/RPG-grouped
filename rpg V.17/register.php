<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/mystyles.css">
    <title>REGISTER</title>
</head>
<body>
    <div id = "all">
        <div id = "gender">
            <div id = "male">
                <button id = "gender_button">
                    <img id = "male_avatar" src="img/base_character.png" alt="male">
                </button>
            </div>
            <div id = "female">
                <button id = "gender_button" >
                    <img id = "female_avatar" src="img/base_character.png" alt="female">
                </button>
            </div>
        </div>
        <img id = "town_img" src="img/town.jpg" alt="pixel town">
        <div id = "title">
            <p>REGISTER</p>
        </div>
        <div id = "boxes">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Username</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email</span>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required>
            </div>
            <div id = "button" class = "d-grid gap-2">
                <input type = "submit" class = "btn btn-primary" value = "Register" name = "btnRegister"/>
            </div>
        </div>
    </div>
</body>
</html>