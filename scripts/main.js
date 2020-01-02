import { Header } from "./Header.js"
import { ListeProduits } from "./ListeProduits.js"
import { Panier } from "./Panier.js"

document.addEventListener("DOMContentLoaded", function() {

    let elHeader = document.querySelector('header'),
        elListeProduits = document.querySelector('[data-js-liste-produits]'),
        elPanier = document.querySelector('[data-js-page-panier]'),
        header,
        liste_produits,
        panier

    if (elHeader) header = new Header(elHeader)
    if (elListeProduits) liste_produits = new ListeProduits(elListeProduits,header)
    if (elPanier) panier = new Panier(elPanier)

});