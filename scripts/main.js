import { Header } from "./Header.js"
import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {

    let elHeader = document.querySelector('header'),
        elListeProduits = document.querySelector('[data-js-liste-produits]'),
        header,
        liste_produits

    if (elHeader) header = new Header(elHeader)
    if (elListeProduits) liste_produits = new ListeProduits(elListeProduits,header)

});