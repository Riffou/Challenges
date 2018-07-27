<?php
// Dans les versions de PHP antiéreures à 4.1.0, la variable $HTTP_POST_FILES
// doit être utilisée à la place de la variable $_FILES.

$uploaddir = '/var/www/html/uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "Le fichier est valide, et a été téléchargé avec succès.";
    echo '<br>';
    echo "Vous pouvez y accéder par ce ";
    echo '<a href="uploads/' . basename($_FILES['userfile']['name']) . '">lien</a>.';
    echo '<br>';
} else {
    echo "Attaque potentielle par téléchargement de fichiers.
          Voici plus d'informations :\n";
}

echo 'Voici quelques informations :';
echo '<br>';			
print_r($_FILES);

echo '</pre>';

?>