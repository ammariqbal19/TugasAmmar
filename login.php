<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN | PSIS </title>
</head>
<body>
    <h1>LOGIN</h1>
    <form action="login.php" method="post" enctype="multipart/form-data">
        <label for="email">Email</label> <br>
        <input type="email" name="email"></input> <br>
        <label for="password">Password</label> <br>
        <input type="password" name="password"></input> <br><br>
        <input type="checkbox" name="ingat" value="1">
        <label for="remember">Ingatkan Saya!</label> <br><br>
        <input type="submit" value="Login"></input> 
    </form>
    <p>Belum Punya Akun? <a href="register.html">Daftar</a>
</body>
</html>