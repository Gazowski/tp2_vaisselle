import { requeteAjax } from "./ajax"

export class Header{
    constructor(elt){
        this.titre = elt.querySelector('h1')
        this.div_panier = elt.querySelector('[data-js-panier]')
        this.compteur_panier = elt.querySelector('[data-js-compteur-panier]')
        this.btn_commande = elt.querySelector('[data-js-btn-commander]')

        this.init()

    }

    init = () =>{
        this.initialiser_compteur_panier()
        this.afficher_btn_commande()
        this.div_panier.addEventListener('click', () => {
            this.preparer_et_ouvrir_page_panier()
        })
    }

    initialiser_compteur_panier = () =>{
        if(!sessionStorage.produitsPanier)
        this.compteur_panier.innerHTML = 0
        else{
            this.calculer_et_afficher_compteur_panier()
        }
    }
    
    calculer_et_afficher_compteur_panier = () =>{
        let produitsPanier = JSON.parse(sessionStorage.produitsPanier),
            total_panier = 0
        for(let item in produitsPanier){
            total_panier += produitsPanier[item]["quantite"]
        }
        this.compteur_panier.innerHTML = total_panier        
    }

    incrementer_compteur_panier = () => {
        let total_panier = parseInt(this.compteur_panier.innerHTML)
        this.compteur_panier.innerHTML = total_panier + 1
    }
        
    preparer_et_ouvrir_page_panier = () => {
        let paramAjax = []
        paramAjax['methode'] = "POST"
        paramAjax['json'] = true
        paramAjax['action'] = 'index.php?Ajax&action=enregistrerIdItemsPanier'
        paramAjax['donnees_a_envoyer'] = JSON.parse(sessionStorage.produitsPanier)
        requeteAjax(paramAjax,()=>{
            window.open("index.php?Panier&action=afficheProduitsPanier","_self")
        })
    }

    afficher_btn_commande = () => {
        if(sessionStorage.produitsPanier){
            this.btn_commande.classList.remove('disparait')
            this.div_panier.classList.add('panier_actif')
        }
    }

}