<?php
session_start();
$conn=mysqli_connect('127.0.0.1','root','','registration');
$name=$_GET['name'];
$email=$_GET['email'];
$password=$_GET['password'];
$query1="SELECT * from user WHERE email='".$email."';";
$res=$conn->query($query1);
$row = $res->fetch_assoc();
if($row===NULL){
    $query2="INSERT into user (name, email, password) VALUES ('".$name."','".$email."','".$password."');";
    $conn->query($query2);
    echo $name;
}
else{
    echo "wrong";
}
?>