<div data-js-wrapper-liste>
	<?php foreach($data as $produit) { ?>
		<article class="tuile" 
				data-js-item
				data-item-id = <?= $produit['id'] ?>
				data-item-inventaire = <?= $produit['inventaire'] ?>>
			<?= $produit["nom"] . " - prix : " .  $produit["prix"] . "$"?> 
		</article>
	<?php } ?>
</div>


