<ul>
<?php
	foreach($data as $restaurant)
	{
?>
	<li><?= "Nom : " . $restaurant["restaurantNom"] . " - Type : " .  $restaurant["typeCuisinesNom"]?> </li>
<?php
	}
?>
</ul>
