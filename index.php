<?php
	define("RACINE", $_SERVER["DOCUMENT_ROOT"] . "/exemple-cours-18/");
	define("RACINEWEB", "http://" . $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . "/exemple-cours-18/");
	

	function __autoload($classe)
	{
		$repertoires = array(RACINE . "controleurs/", 
						RACINE . "modeles/", 
						RACINE . "vues/");
		
		foreach($repertoires as $rep)
		{
			if(file_exists($rep . $classe . ".php"))
			{
				require_once($rep . $classe . ".php");
				return;
			}
		}
	}

	
	Routeur::route();
?>