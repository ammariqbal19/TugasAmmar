<?php
 $koneksi = mysqli_connect("localhost:3307", "root", "", "webpsis");

if(!$koneksi)
{
    die("Koneksi Gagal!: " . mysqli_connect_error());
}

$query = "SELECT * FROM pemain";

$result = mysqli_query($koneksi, $query);


$pmn = mysqli_fetch_row($result);


var_dump($result);

?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DATA PEMAIN</title>
</head>
<body>
    <h1>Data Pemain </h1>

    <Table border="1px" cellspacing="0" cellpadding="12px">
        <tr>
            <th>Nama Pemain</th>
            <th>Nomor Punggung</th>
            <th>Posisi</th>
            <th>Harga Jual</th>
        </tr>
</body>
</html>