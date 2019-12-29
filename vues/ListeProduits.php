<h2>Liste des Produits</h2>
<ul>
<?php
	foreach($data as $produit)
	{
?>
	<li><?= $produit["id"] . " - " . $produit["nom"] . " - prix : " .  $produit["prix"] . "$"?> </li>
<?php
	}
?>
</ul>
