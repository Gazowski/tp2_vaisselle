import { requeteAjax } from './ajax.js'
import { ItemBoutique } from './ItemBoutique.js'

export class ListeProduits{
    constructor(elt,header){
        this.elt = elt
        this.header = header //objet header
        this.champ_filtre = elt.querySelector('[data-js-filtre]') 
        this.wrapper_liste = elt.querySelector('[data-js-wrapper-liste]')
        this.btn_precedent = elt.querySelector('[data-js-btn-precedent]')
        this.btn_suivant = elt.querySelector('[data-js-btn-suivant]')

        this.pagination = 0
        this.produits_par_page = 12
        this.paramAjax = []
        this.paramAjaxObjet = {}
        
        this.init()
    }
    
    init = () =>{
        this.obtenir_total_produits()
        this.btn_suivant.addEventListener('click',()=>{
            this.pagination += 1
            this.afficher_liste_produits()
        })
        this.btn_precedent.addEventListener('click',()=>{
            this.pagination -= 1
            this.afficher_liste_produits()
        })
        this.champ_filtre.addEventListener('change',()=>{
            this.afficher_liste_produits()
        })
        this.instancier_item()           
    }
    
    afficher_liste_produits = () =>{
        this.afficher_produits()
        this.activer_boutons()
    }

    instancier_item = () =>{
        // NOTE : items est déclaré ici car la liste est rechargé par les requetes ajax.
        // la liste des items doit être verifier a chaque rechargement de la liste
        let items = this.elt.querySelectorAll('[data-js-item]')
        for(let item of items){
            new ItemBoutique(item,this.header)
        }
    }

    obtenir_total_produits = () =>{
        this.paramAjax = 
        {
            methode : "GET",
            action : `index.php?Ajax&action=obtenirTotalProduits`
        }
        requeteAjax(this.paramAjax, (reponse_ajax) => {
            this.elt.dataset.totalProduit = reponse_ajax
        }) 
    }
    
    afficher_produits = () =>{
        let offsetPagination = this.pagination * this.produits_par_page,
            filtre = this.champ_filtre.value
        this.paramAjax = 
        {
            methode : "GET",
            action : `index.php?Ajax&action=afficheListeSuivante&offsetPagination=${offsetPagination}&filtre=${filtre}`
        }
        requeteAjax(this.paramAjax, (reponse_ajax) =>{ 
            this.afficher_liste(reponse_ajax) 
            this.instancier_item() 
        }) 
        // NOTE : pour effectuer une fonction quand la requete ajax est terminée
        // la fonction est passée en paramêtre par l'intermédiare d'une fonction anonyme
    }

    afficher_liste = (items) =>{
        this.wrapper_liste.innerHTML = items
    }

    activer_boutons = () =>{
        // calcul du nombre de page max (page 1 = 0)
        let pagination_max = Math.floor(this.elt.dataset.totalProduit/this.produits_par_page)
        this.btn_precedent.disabled = this.pagination > 0 ? false : true
        this.btn_suivant.disabled = this.pagination < pagination_max ? false : true       
    }

}