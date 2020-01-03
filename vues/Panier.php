
<div data-js-wrapper-liste>
    <?php 
    foreach($data as $id => $produit){
        $montant_total_item = $produit["prix"] * $produit["quantite"] ?>
		<article class="tuile" 
				data-js-item
                data-item-id = <?= $produit['id'] ?>
                data-item-prix = <?= $produit["prix"] ?> >
            <p><?= $produit["nom"] . " - prix (unitaire) : " .  $produit["prix"] . "$"?></p>
            <label for="quantite<?= $produit['id'] ?>">Quantité:</label>
            <input type="number" 
                    id="quantite<?= $produit['id'] ?>" 
                    name="quantite<?= $produit['id'] ?>" 
                    min="0" max="<?= $produit["inventaire"]?>"
                    value="<?= $produit["quantite"]?>"
                    data-js-choix-quantite>
            quantité restante = <span data-item-inventaire = <?= $produit["inventaire"]?>><?= $produit["inventaire"]?></span> en stock
            <p>prix total = <span data-js-montant-item><?= $montant_total_item ?></span>$</p>
        </article>
    <?php } ?>
    <article>Total Panier = <span data-js-montant-panier></span>$</article>
</div>