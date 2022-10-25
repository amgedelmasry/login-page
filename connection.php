<?php
    session_start();
    $conn=mysqli_connect('127.0.0.1','root','','registration');
    $email=$_GET['email'];
    $password=$_GET['password'];
    $query="select * from user where email='".$email."' and password='".$password."'";
    $res=$conn->query($query);
    $row = $res->fetch_assoc();
    if($row===NULL){
        echo "wrong";
    }
    else{
        echo $row['name'];
    } 
 
?>
     