import { requeteAjax } from './ajax.js'

export class ListeProduits{
    constructor(elt){
        this.elt = elt
        this.wrapper_liste = elt.querySelector('[data-js-wrapper-liste]')
        this.btn_precedent = elt.querySelector('[data-js-btn-precedent]')
        this.btn_suivant = elt.querySelector('[data-js-btn-suivant]')
        this.pagination = 0
        this.produits_par_page = 12
        this.paramAjax = []
        
        this.init()
    }
    
    init = () =>{
        this.obtenir_total_produits()
        this.btn_suivant.addEventListener('click',()=>{
            this.pagination += 1
            this.afficher_produits()
            this.activer_boutons()
        })
        this.btn_precedent.addEventListener('click',()=>{
            this.pagination -= 1
            this.afficher_produits()
            this.activer_boutons()
        })
    }
    
    obtenir_total_produits = () =>{
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=obtenirTotalProduits`
        this.paramAjax['parent'] = this.elt
        requeteAjax(this.paramAjax) 
    }
    
    
    afficher_produits = () =>{
        let offsetPagination = this.pagination * this.produits_par_page
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=afficheListeSuivante&offsetPagination=${offsetPagination}`
        this.paramAjax['parent'] = this.wrapper_liste
        requeteAjax(this.paramAjax)
    }

    activer_boutons = () =>{
        // calcul du nombre de page max (page 1 = 0)
        // dataset.totalProduit est défini dans le fichier requeteAjax
        let pagination_max = Math.floor(this.elt.dataset.totalProduit/this.produits_par_page)

        this.btn_precedent.disabled = this.pagination > 0 ? false : true
        this.btn_suivant.disabled = this.pagination < pagination_max ? false : true       
        
    }
    
}