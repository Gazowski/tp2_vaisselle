<div class="liste_produits" data-js-wrapper-liste>
	<?php foreach($data as $produit) { ?>
		<article class="tuile" 
				data-js-item
				data-item-id = <?= $produit['id'] ?>
				data-item-nom = <?= str_replace(" ","_",$produit["nom"]) ?>>
			<p><?= $produit["nom"] . " - prix : " .  $produit["prix"] . "$"?> </p>
			<p><span data-item-inventaire=<?= $produit['inventaire'] ?>></span> en stock</p>
		</article>
	<?php } ?>
</div>


