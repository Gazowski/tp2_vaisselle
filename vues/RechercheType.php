<div id="menuIntro">
	<a href="./index.php">Accueil</a>
</div>

<h1>Types de restaurants</h1>


<div data-js-restaurant-types>
	<form>
		<select name="types" data-js-select>
		<?php
			foreach($data as $type)
			{
		?>
			<option value="<?= $type['ID']?>"> <?= $type["Nom"]?> </option>
		<?php
			}
		?>
		</select>
		

		<button data-js-btn>Soumettre</button>

	</form>

	<div data-js-results></div>
</div>







