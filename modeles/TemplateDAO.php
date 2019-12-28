<?php
	
	abstract class TemplateDAO
	{
		protected $connexion;
		
		protected function getPrimaryKey()
		{
			return "id";			
		}
		
		abstract protected function getTable();
		
		public function __construct()
		{
			$this->connexion = new PDO("mysql:host=localhost;dbname=listerestaurants", "root", "root");
		}
	}
?>