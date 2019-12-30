<div data-js-wrapper-liste>
	<?php foreach($data as $produit) { ?>
		<article class="tuile" data-js-item><?= $produit["id"] . " - " . $produit["nom"] . " - prix : " .  $produit["prix"] . "$"?> </article>
	<?php } ?>
</div>


