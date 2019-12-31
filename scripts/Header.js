export class Header{
    constructor(elt){
        this.titre = elt.querySelector('h1')
        this.compteur_panier = elt.querySelector('[data-js-compteur-panier]')

        this.init()
    }

    init = () =>{
        this.compteur_panier.innerHTML = 0
    }
}