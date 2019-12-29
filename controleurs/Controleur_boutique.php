<?php
	class Controleur_Boutique extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			$this->afficheVue("Head");
			$this->afficheVue('Header');
			
			if(isset($params["action"]))
			{
				//modèle et vue vides par défaut
				$data = array();
				
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					default:
						// $modeleBoutique = new Modele_Boutique();
						// $data = $modeleBoutique->obtenirTous();
						// $vue = "ListeBoutique";
						// $this->afficheVue($vue, $data);
					break;
				}			
			}
			else
			{
				//action par défaut
				$modeleBoutique = new Modele_Boutique();							
				$data = $modeleBoutique->obtenirTous();
				$vue = "ListeProduits";		
				$this->afficheVue($vue,$data);
			}
			$this->afficheVue("Footer");
		}
	}
?>