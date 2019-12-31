import { Header } from "./Header.js"
import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {

    let elHeader = document.querySelector('header'),
        elListeProduits = document.querySelector('[data-js-liste-produits]'),
        header,
        listeProduits

    if (elHeader) header = new Header(elHeader)
    if (elListeProduits) listeProduits = new ListeProduits(elListeProduits)

    // initialisation du header
    header.initialiser_compteur_panier()

    // initialisation de la liste produits

    
    
});