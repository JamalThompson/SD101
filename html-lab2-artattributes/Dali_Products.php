<?php
$servername = "localhost";
$username = "root";
$password = "YourPasswordHere";

try {
    $conn = new PDO("mysql:host=$servername;dbname=dali", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully";

    //sql
    $sql = "SELECT product_id, name, description, price FROM products";
    $statement = $conn->prepare($sql);
    $statement->execute();
    $result = "{\"data\":[";
    $statement->setFetchMode(PDO::FETCH_ASSOC);
    // output data of each row
    foreach($statement->fetchAll() as $k=>$v) {
          $result .= json_encode($v). ",";
        }
    //remove trailing comma and adds closing brackets
    $result = substr($result,0,-1);
    $result .= "]}";
    echo $result;
    $conn = null;
}
catch(PDOException $e)
{
  echo "Connection failed: " . $e->getMessage();
}
?>
