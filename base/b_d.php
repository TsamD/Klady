<?php
    $server = "mysql";
    $host = "localhost";
    $dbname = "kady";
    $charset = "utf8";

    $dsn = "$server:host=$host;dbname=$dbname;charset=$charset";
    $username = "kady";
    $password = "$Interface3";

    try {
        $database = new PDO($dsn, $username, $password);
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $database;
    } catch (PDOException $e) {
        die("Erreur de connexion à la base de données : " . $e->getMessage());
    }
?>