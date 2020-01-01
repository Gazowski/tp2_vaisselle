<?php
	class Modele_Panier extends TemplateDAO
	{
		public function getTable()
		{
			return "panier";
		}	
		
		public function obtenirProduitParId($id)
		{
			try
			{
				//$stmt = $this->connexion->prepare("SELECT * 
													FROM produits
													ORDER BY " . $filtre . "
													LIMIT " . $offset_page . " , 12 ");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(PDOException $exc)
			{
				trigger_error("Erreur lors de la requête : " . $exc->getMessage());
				return 0;
			}
		}
		
	}
?>