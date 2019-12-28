<?php
	class Controleur_Restaurants extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			$this->afficheVue("Head");
			
			if(isset($params["action"]))
			{
				//modèle et vue vides par défaut
				$data = array();
				
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					case "RechercheType":						
						$modeleRestaurants = new Modele_Restaurants();
						$data = $modeleRestaurants->obtenirTypeRestaurant();
						$vue = "RechercheType";
						$this->afficheVue($vue, $data);
						break;
					
	
					default:
						$modeleRestaurants = new Modele_Restaurants();
						$data = $modeleRestaurants->obtenirTous();
						$vue = "ListeRestaurants";
						$this->afficheVue($vue, $data);
						break;
				}			
			}
			else
			{
				//action par défaut
				$modeleRestaurants = new Modele_Restaurants();							
				$vue = "Acceuil";		
				$this->afficheVue($vue);
			}
			$this->afficheVue("Footer");
		}
	}
?>