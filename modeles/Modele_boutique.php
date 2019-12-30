<?php
	class Modele_Boutique extends TemplateDAO
	{
		public function getTable()
		{
			return "boutique";
		}	
		
		public function obtenirTous($offset_page = 0)
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT * 
													FROM produits
													ORDER BY prix ASC
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

		public function obtenirTotalProduits()
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT COUNT(*) AS total FROM produits");
				$stmt->execute();
				return $stmt->fetch(PDO::FETCH_ASSOC);
			}
			catch(PDOException $exc)
			{
				trigger_error("Erreur lors de la requête : " . $exc->getMessage());
				return 0;
			}

		}
		
	}
?>