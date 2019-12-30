import { Header } from "./Header.js"
import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {

    let elHeader = document.querySelector('header'),
        elListeProduits = document.querySelector('[data-js-liste-produits]')

    if (elHeader) new Header(elHeader)
    if (elListeProduits) new ListeProduits(elListeProduits)
    
    
});