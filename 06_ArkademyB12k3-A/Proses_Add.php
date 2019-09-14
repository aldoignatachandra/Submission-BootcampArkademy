<?php

    require "Connection.php";

    $idemployee = $_POST['idemployee'];
    $name = $_POST['name'];
    $idwork = $_POST['idwork'];
    $idsalary = $_POST['idsalary'];

    $query = "INSERT INTO tb_name VALUES('$idemployee','$name','$idwork','$idsalary')";
    $save = mysqli_query($conn, $query);
    
    if($save)
        header("location:06_Arkademyb12k3-A.php");
    else
        echo "Data Tidak Berhasil Disimpan";
        
?>