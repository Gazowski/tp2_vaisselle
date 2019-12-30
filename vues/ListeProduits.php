
<section data-js-liste-produits>
	<div data-js-wrapper-liste>
		<?php foreach($data as $produit) { ?>
			<article data-js-item><?= $produit["id"] . " - " . $produit["nom"] . " - prix : " .  $produit["prix"] . "$"?> </article>
		<?php } ?>
	</div>


