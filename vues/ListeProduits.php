<div class="liste_produits" data-js-wrapper-liste>
	<?php foreach($data as $produit) { ?>
		<div class="conteneur_cube">
			<div class="cube">
				<article class="tuile face" 
						data-js-item
						data-item-id = <?= $produit['id'] ?>
						data-item-nom = <?= str_replace(" ","_",$produit["nom"]) ?>>
					<img src=<?= $produit['lienimage'] ?>
						alt=<?= $produit['nom'] ?>>
						<div>
							<div>
								<h3><?= $produit["nom"] ?></h3>
								<h3 class="prix">prix : <?= $produit["prix"] . "$"?> </h3>
								<p><span data-item-inventaire=<?= $produit['inventaire'] ?>></span> en stock</p>
							</div>
							<button class="btn-icon"><i class="fas fa-cart-plus"></i></button>
						</div>
				</article>
				<article class="tuile cote_droit" 
						data-js-item
						data-item-id = <?= $produit['id'] ?>
						data-item-nom = <?= str_replace(" ","_",$produit["nom"]) ?>>
					<img src=<?= $produit['lienimage'] ?>
						alt=<?= $produit['nom'] ?>>
						<div>
							<div>
								<h3><?= $produit["nom"] ?></h3>
								<h3 class="prix">prix : <?= $produit["prix"] . "$"?> </h3>
								<p><span data-item-inventaire=<?= $produit['inventaire'] ?>></span> en stock</p>
							</div>
							<button class="btn-icon"><i class="fas fa-cart-plus"></i></button>
						</div>
				</article>
			</div>
		</div>
	<?php } ?>
</div>


