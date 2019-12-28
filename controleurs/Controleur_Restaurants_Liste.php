<?php
	class Controleur_Restaurants_Liste extends Controleur_Restaurants
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			
			if(isset($params["action"]))
			{
				$modeleRestaurants = new Modele_Restaurants();
                $data = $modeleRestaurants->obtenirTous();
                $vue = "ListeRestaurants";
                $this->afficheVue($vue, $data);
			}
			else
			{
                //action par défaut
                $this->afficheVue("Head");
				$modeleRestaurants = new Modele_Restaurants();							
				$vue = "Acceuil";		
                $this->afficheVue($vue);
                $this->afficheVue("Footer");
			}
		}
	}
?>