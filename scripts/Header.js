export class Header{
    constructor(elt){
        this.titre = elt.querySelector('h1')
        this.compteur_panier = elt.querySelector('[data-js-compteur-panier]')
        this.produitsPanier = []

        this.init()

    }

    init = () =>{
        if(!sessionStorage.produitsPanier)
            this.compteur_panier.innerHTML = 0
        else{
            let produitsPanier = JSON.parse(sessionStorage.produitsPanier)
            this.compteur_panier.innerHTML = produitsPanier.length
        }
    }

    incrementer_compteur_panier = () =>{
        let total_panier = parseInt(this.compteur_panier.innerHTML)
        this.compteur_panier.innerHTML = total_panier + 1
    }
        
    enregistrer_id_item = (item) =>{
        //session storage ne prend que les strings
        //création d'un tableau intérmédiaire qui est transformé en Json avant d'être enregistré en session storage
        if(sessionStorage.produitsPanier)
            this.produitsPanier = JSON.parse(sessionStorage.produitsPanier)
        this.produitsPanier.push(item.dataset.itemId)
        sessionStorage.produitsPanier = JSON.stringify(this.produitsPanier) 
    }
}