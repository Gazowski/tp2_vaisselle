export class Header{
    constructor(elt){
        this.titre = elt.querySelector('h1')
        this.compteur_panier = elt.querySelector('[data-js-compteur-panier]')

    }

    initialiser_compteur_panier = () =>{
        if(!sessionStorage.produitsPanier)
            this.compteur_panier.innerHTML = 0
        else{
            let produitsPanier = JSON.parse(sessionStorage.produitsPanier)
            this.compteur_panier.innerHTML = produitsPanier.length
        }
    }
}