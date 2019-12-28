<?php
	class Modele_Boutique extends TemplateDAO
	{
		public function getTable()
		{
			return "boutique";
		}	
		
		public function obtenirTous()
		{
			try
			{
				$stmt = $this->connexion->prepare("select Boutique.ID as boutiqueId, Boutique.Nom as boutiqueNom, TypeCuisines.Id as typeCuisinesID, TypeCuisines.Nom as typeCuisinesNom
												from boutique 
												JOIN TypeCuisines on TypeCuisines.ID = Boutique.IDTypeCuisine");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(Exception $exc)
			{
				return 0;
			}
		}
		
	}
?>