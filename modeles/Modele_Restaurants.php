<?php
	class Modele_Restaurants extends TemplateDAO
	{
		public function getTable()
		{
			return "restaurants";
		}	
		
		public function obtenirTous()
		{
			try
			{
				$stmt = $this->connexion->prepare("select Restaurants.ID as restaurantId, Restaurants.Nom as restaurantNom, TypeCuisines.Id as typeCuisinesID, TypeCuisines.Nom as typeCuisinesNom
												from restaurants 
												JOIN TypeCuisines on TypeCuisines.ID = Restaurants.IDTypeCuisine");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(Exception $exc)
			{
				return 0;
			}
		}
		
		public function obtenirTypeRestaurant()
		{
			try
			{
				$stmt = $this->connexion->prepare("select * from typecuisines");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(Exception $exc)
			{
				return 0;
			}
		}
		
		public function obtenirRestaurantsParType($id)
		{
			try
			{
				$stmt = $this->connexion->prepare("select Nom from restaurants where IDTypeCuisine = :id");
				$stmt->bindParam(":id", $id);
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