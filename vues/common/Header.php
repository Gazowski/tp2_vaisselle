<!-- Un header - simple - avec un icône de panier (svg) avec le
nombre de produits sélectionnés s’il y en a au moins 1. -->

<header>
	<h1>Boutique de vaissellerie</h1>
	<div 
		class="logo"
		data-js-panier>
		<div data-js-compteur-panier></div>
		<img
			src="./assets/images/svg/panier.svg"
			alt="logo panier"
			data-js-icone-panier />
		<button 
			class="disparait"
			data-js-btn-commander>
			Commander
		</button>
	</div>
</header>