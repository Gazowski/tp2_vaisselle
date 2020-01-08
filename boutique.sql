
-- Database: boutique


CREATE TABLE produits (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(50) NOT NULL,
	prix tinyint(4) NOT NULL,
	lienimage varchar(75) NOT NULL,
	inventaire tinyint(6),
	PRIMARY KEY(id)
);


CREATE TABLE commandes (
	id int NOT NULL AUTO_INCREMENT,
	detail varchar(300) NOT NULL,
	montant int(4) NOT NULL,
	PRIMARY KEY(id)
);


CREATE TABLE usagers (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(50) NOT NULL,
	prenom varchar(50) NOT NULL,
	adresse varchar(75) NOT NULL,
	courriel varchar(50) NOT NULL UNIQUE,
	optin tinyint(1) NOT NULL,
	PRIMARY KEY(id)
);



INSERT INTO produits (id, nom, prix, lienimage, inventaire) VALUES
			(1, 'Bouilloire classique', 127, './assets/images/produits/bouilloire-classique.jpg', 1000),
			(2, 'Bouilloire conique', 127, './assets/images/produits/bouilloire-conique.jpg', 1000),
			(3, 'Assiette classique', 25, './assets/images/produits/assiette-classique.jpg', 1000),
			(4, 'Assiette minimale', 18, './assets/images/produits/assiette-minimale.jpg', 1000),
			(5, 'Assiette à dessert classique', 14, './assets/images/produits/assiette-classique-dessert.jpg', 1000),
			(6, 'Assiette à dessert minimale', 12, './assets/images/produits/assiette-minimale-dessert.jpg', 1000),
			(7, 'Assiette creuse classique', 20, './assets/images/produits/assiette-classique-creuse.jpg', 1000),
			(8, 'Assiette creuse minimale', 16, './assets/images/produits/assiette-minimale-creuse.jpg', 1000),
			(9, 'Petite assiette classique', 17, './assets/images/produits/assiette-petite-classique.jpg', 1000),
			(10, 'Petite assiette minimale', 15, './assets/images/produits/assiette-petite-minimale.jpg', 1000),
			(11, 'Bol classique', 10, './assets/images/produits/bol-classique.jpg', 1000),
			(12, 'Bol minimal', 8, './assets/images/produits/bol-minimal.jpg', 1000),
			(13, 'Bol soupe à l''oignon', 42, './assets/images/produits/bol-soupe-oignon.jpg', 1000),
			(14, 'Bol de service classique', 125, './assets/images/produits/bol-service-classique.jpg', 1000),
			(15, 'Bol de service minimal', 100, './assets/images/produits/bol-service-minimale.jpg', 1000),
			(16, 'Tasse à café classique', 22, './assets/images/produits/tasse-cafe-classique.jpg', 1000),
			(17, 'Tasse à café minimale', 19, './assets/images/produits/tasse-cafe-minimale.jpg', 1000),
			(18, 'Plateau minimal', 127, './assets/images/produits/plateau-minimal.jpg', 1000),
			(19, 'Plateau ovale', 127, './assets/images/produits/plateau-ovale.jpg', 1000),
			(20, 'Beurrier', 60, './assets/images/produits/beurrier.jpg', 1000),
			(21, 'Beurrier breton', 75, './assets/images/produits/beurrier-breton.jpg', 1000),
			(22, 'Pichet classique', 95, './assets/images/produits/pichet-classique.jpg', 1000),
			(23, 'Pichet minimal', 80, './assets/images/produits/pichet-minimal.jpg', 1000),
			(24, 'Saucière', 65, './assets/images/produits/sauciere.jpg', 1000),
			(25, 'Grande théière', 70, './assets/images/produits/theiere-grande.jpg', 1000),
			(26, 'Cafetiere à piston', 127, './assets/images/produits/cafetiere-piston.jpg', 1000),
			(27, 'Crémier et sucrier classique', 50, './assets/images/produits/cremier-sucrier-classique.jpg', 1000),
			(28, 'Crémier et sucrier minimal', 35, './assets/images/produits/cremier-sucrier-minimal.jpg', 1000),
			(29, 'Pot à sel', 55, './assets/images/produits/pot-sel.jpg', 1000),
			(30, 'Ramequin', 7, './assets/images/produits/ramequin.jpg', 1000);



INSERT INTO commandes (id, detail, montant) VALUES
			(1, '2 Ramequin, 1 Beurrier', 74);



INSERT INTO usagers (id, nom, prenom, adresse, courriel, optin) VALUES
			(1, 'Plante', 'Mathieu', '1347 rue Cartier', 'mathieu.plante@gmail.com', 0),
			(2, 'Gervais', 'Madeline', '392 rue des Pinsons', 'madeline05@yahoo.com', 1);
