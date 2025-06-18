<?php
 $koneksi = mysqli_connect("localhost:3307", "root", "", "webpsis");

if(!$koneksi)
{
    die("Koneksi Gagal!: " . mysqli_connect_error());
}

    function query($query) {
    global $koneksi;
    $result = mysqli_query($koneksi, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) 
    {
        $rows[] = $row;
    }
    return $rows;
}

function tambahdata($data) {
    global $koneksi;
     $name = $_data['name'];
        $nomor_punggung = $_data['nomor_punggung'];
        $posisi = $_data['posisi'];
        $harga = $_data['harga'];
}
    

function hapusdata($id) {
    global $koneksi;
    $query = "DELETE FROM pemain WHERE id = $id";
    mysqli_query($koneksi, $query);
    
    return mysqli_affected_rows($koneksi);
}
?>