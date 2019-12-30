export class Header{
    constructor(elt){
        this.titre = elt.querySelector('h1')
        this.compteur_panier = elt.querySelector('[data-js-compteur-panier]')
        this.quantite_item = this.compteur_panier.dataset.compteurPanier
        this.quantite_item = 0

        this.init()
    }

    init = () =>{
        this.compteur_panier.innerHTML = this.quantite_item
    }
}