<div id="menuIntro">
	<a href="./index.php">Accueil</a>
</div>

<h2>Tous les restaurants</h2>
<ul>
<?php
	foreach($data as $restaurant)
	{
?>
	<li><?= "Nom : " . $restaurant["Nom"]?> </li>
<?php
	}
?>
</ul>
