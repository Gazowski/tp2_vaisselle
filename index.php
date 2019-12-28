<?php
	define("RACINE", $_SERVER["DOCUMENT_ROOT"] . "/tp2_vaisselle/");
	define("RACINEWEB", "http://" . $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . "/tp2_vaisselle/");
	

	function mon_autoloader($classe)
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

	spl_autoload_register("mon_autoloader");
	Routeur::route();
?>