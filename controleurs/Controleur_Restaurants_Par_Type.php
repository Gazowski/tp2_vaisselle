<?php
	class Controleur_Restaurants_Par_Type extends Controleur_Restaurants
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			
			if(isset($params["action"]))
			{
				//modèle et vue vides par défaut
				$data = array();
                $modeleRestaurants = new modele_Restaurants();
                $data = $modeleRestaurants->obtenirTypeRestaurant();
                //var_dump($data);
                $data = $modeleRestaurants->obtenirRestaurantsParType($params["action"]);
                $vue = "ListeRestaurantsParType";
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