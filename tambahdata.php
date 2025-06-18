<?php
    require 'function.php';

    if (isset($_POST['submit'])) 
    {
      
        tambahdata($_POST);
        
        $query = "INSERT INTO pemain (nama, nomor_punggung, posisi, harga) VALUES ('$name', '$nomor_punggung', '$posisi', '$harga')";
        mysqli_query($koneksi, $query);

        if(mysqli_affected_rows($koneksi)>0)     
        {
            echo "
            <script>
                alert('Data berhasil ditambahkan!');
                document.location.href = 'datapemain.php';
                </script>";
        }
        else
        {
            echo "
            <script>
                alert('Data gagal ditambahkan!');
                document.location.href = 'tambahdata.php';
                </script>";
        }
    }
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Data</title>
</head>
<body>
    <h1>Tambah Data Pemain</h1>
    <form action="" method="post">
        <label for="name">Nama : </label>
        <input type="text" name="name" id="name" placeholder="Masukkan Nama" required/><br>
        <label for="nomor_punggung">Nomor Punggung : </label>
        <input type="text" name="nomor_punggung" id="nomor-punggung" required /><br>
        <label for="posisi">Posisi : </label>
        <input type="text" name="posisi" id="posisi" required/><br>
        <label for="harga">Harga : </label>
        <input type="text" name="harga" id="harga" required/><br>
        <button type="submit" name="submit">Tambah Data</button>

    </form>
</body>
</html>