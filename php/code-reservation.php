<?php
session_start();
$nb = 0;
$nbfe = 0;
$nbho = 0;
$erreur = "";
$accept = "";
$err1 = "";
$err2 = "";
$bnfemme ="";
$bnhomme ="";
include '../base/b_d.php';

if (isset($_POST['soumettre'])) {
    $Desti = trim($_POST['destination']);
    $G = trim($_POST['genre']);
    $N = trim($_POST['nom']);
    $P = trim($_POST['prénom']);
    $D = trim($_POST['date_naissance']);
    $email = trim($_POST['email']);
    $tel = trim($_POST['tel']);
    $adress = trim($_POST['adresse_postal']);
    $paiement = trim($_POST['paiement']);

    $num = $database->prepare("SELECT * FROM user_reserveé");
    $num->execute();
    $nb = $num->rowCount();

    $numfemme = $database->prepare("SELECT COUNT(*) FROM user_reserveé WHERE genre = 'femme'");
    $numfemme->execute();
    $nbfe = $numfemme->fetchColumn();

    $numhomme = $database->prepare("SELECT COUNT(*) FROM user_reserveé WHERE genre = 'homme'");
    $numhomme->execute();
    $nbho = $numhomme->fetchColumn();

    if ($nb < 19) {
        if (($G == "femme" && $nbfe < 9) || ($G == "homme" && $nbho < 9)) {
            if (!empty($_POST['email'])) {
                $sql = "INSERT INTO user_reserveé VALUES (NULL, :destination, :genre, :nom, :prenom, :date_naissance, :email, :tel, :adress_postal, :mode_paiement)";
                $objet = $database->prepare($sql);
                $option = array(
                    ":destination" => $Desti,
                    ":genre" => $G,
                    ":nom" => $N,
                    ":prenom" => $P,
                    ":date_naissance" => $D,
                    ":email" => $email,
                    ":tel" => $tel,
                    ":adress_postal" => $adress,
                    ":mode_paiement" => $paiement
                );

                if ($objet->execute($option)) {
                    // echo "<p>Connexion validée</p>";
                    $accept = "Réservation effectuée avec succès.";
                    $nb++;
                    // echo $nb++;
                    // header('Location:fiche.php');
                    if ($G == "femme") {
                        $nbfe++;
                        $bnfemme ="nombre de femme : " . $nbfe++; 
                    }
                    if ($G == "homme") {
                        $nbho++;
                        $bnhomme = "nombre de homme : " . $nbho++;
                    }
                } else {
                    $erreur = "<p>Connexion NON validée</p>";
                }
            }
        } else {
            // Le nombre maximum de femmes ou d'hommes a été atteint
                $err1 ="Erreur : Le nombre maximum de femmes ou d'hommes a été atteint.";
        }
    } else {
        $err2 = "Nombre maximum atteint";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <link rel="stylesheet" href="../asset/CSS/rec"> -->
    <link rel="stylesheet" href="../asset/CSS/recu-Reserve.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reçu</title>
</head>
<body>
    <div class="main">
    <div class="retour"><a href="HOME2.php"> retour </a></div>
        <div class="fiche">
            <p><?php echo $err1  ; ?></p>
            <p><?php echo $err2  ; ?></p>

            <?php if (!$erreur && $accept) : ?>
                    <img src="../image/logonoir.png" width="160px" alt="logonoir">
                    <h1> Confirmation de réservation</h1>
                <table>
                        <tr><td>NOM:</td><td><?php echo $N; ?></td></tr>
                        <tr><td>Prenom:</td><td><?php echo $P; ?></td></tr>
                        <tr><td>Destination:</td><td><?php echo $Desti; ?></td></tr>
                        <tr><td>Email:</td><td><?php echo $email; ?></td></tr>
                        <tr><td>Date de naissance:</td><td><?php echo $D; ?></td></tr>
                        <tr><td>Tel:</td><td><?php echo $tel; ?></td></tr>
                        <tr><td>Genre:</td><td><?php echo $G; ?></td></tr>
                        <tr><td>Adresse:</td><td><?php echo $adress; ?></td></tr>
                        <tr><td>Mode de paiement :</td><td><?php echo $paiement; ?></td></tr>
                        <tr><td>Prix</td><td>5.000 €</td></tr>   
                </table>
                <!-- <button> CONFIRMER</button> -->
                
                
            <?php endif; ?>
        </div>
        <fieldset>
            <p>  Nombre de femmes reservées : <?php echo $nbfe  ; ?>  </p>
            <p>  Nombre de hommes reservés : <?php echo $nbho   ; ?> </p>
        </fieldset>
    </div>
</body>
</html>