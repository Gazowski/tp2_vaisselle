<?php
	class Controleur_Ajax extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
		
			if(isset($params["action"]))
			{
				//modèle et vue vides par défaut
				$data = array();
				
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					case "afficheListeSuivante":
						if(isset($params["offsetPagination"]) && $params["filtre"])
						{
							$modeleBoutique = new Modele_Boutique();
							$data = $modeleBoutique->obtenirTous($params["offsetPagination"],$params["filtre"]);
							$vue = "ListeProduits";
							$this->afficheVue($vue, $data);
						}
						else
                            echo "erreur";
                    break;

                    case "obtenirTotalProduits":
                        $modeleBoutique = new Modele_Boutique();
                        $data = $modeleBoutique->obtenirTotalProduits();
                        echo ($data['total']);
					break;
					
					case "enregistrerIdItemsPanier":
						$request_payload = file_get_contents("php://input");
						$_SESSION['idItemsPanier'] = json_decode($request_payload, true);
					break;
                
                    default:
                        echo 'error';
				}			
			}
			else
                echo 'error';
		}
	}
?>