import { requeteAjax } from './ajax.js'

export class ListeProduits{
    constructor(elt){
        this.elt = elt
        this.wrapper_liste = elt.querySelector('[data-js-wrapper-liste]')
        this.btn_suivant = elt.querySelector('[data-js-btn-suivant]')
        this.pagination = 0
        this.produits_par_page = 12
        this.paramAjax = []
        
        this.init()
    }
    
    init = () =>{
        this.obtenir_total_produits()
        this.btn_suivant.addEventListener('click',()=>{this.afficher_produits_suivants()})
    }
    
    obtenir_total_produits = () =>{
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=obtenirTotalProduits`
        this.paramAjax['parent'] = this.elt
        requeteAjax(this.paramAjax) 
    }

    afficher_produits_suivants = () =>{
        this.pagination += 1
        let offsetPagination = this.pagination * this.produits_par_page
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=afficheListeSuivante&offsetPagination=${offsetPagination}`
        this.paramAjax['parent'] = this.wrapper_liste
        requeteAjax(this.paramAjax)
    }
}