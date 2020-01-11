<div class="liste_produits" data-js-wrapper-liste>
	<?php foreach($data as $produit) { ?>
		<div class="conteneur_cube">
			<div class="cube" 
				data-js-item
				data-item-id = <?= $produit['id'] ?>
				data-item-nom = <?= str_replace(" ","_",$produit["nom"]) ?>>
				<article class="tuile face">
					<img src=<?= $produit['lienimage'] ?>
						alt=<?= $produit['nom'] ?>>
						<div>
							<h3><?= $produit["nom"] ?></h3>
							<h3 class="prix">prix : <?= $produit["prix"] . "$"?> </h3>
							<p><span data-item-inventaire=<?= $produit['inventaire'] ?>></span> en stock</p>
						</div>
				</article>
				<article class="tuile cote_droit" >
					<img src=<?= $produit['lienimage'] ?>
						alt=<?= $produit['nom'] ?>>
					<button class="btn-icon"><i class="fas fa-cart-plus"></i></button>
				</article>
			</div>
		</div>
	<?php } ?>
</div>


