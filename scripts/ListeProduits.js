import { requeteAjax } from './ajax.js'

export class ListeProduits{
    constructor(elt){
        this.elt = elt
        this.champ_filtre = elt.querySelector('[data-js-filtre]') 
        this.wrapper_liste = elt.querySelector('[data-js-wrapper-liste]')
        this.btn_precedent = elt.querySelector('[data-js-btn-precedent]')
        this.btn_suivant = elt.querySelector('[data-js-btn-suivant]')

        this.pagination = 0
        this.produits_par_page = 12
        this.paramAjax = []
        this.produitsPanier = []
        
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

        this.traitement_liste()
                
    }
    
    afficher_liste_produits = () =>{
        this.afficher_produits()
        this.activer_boutons()
    }
    
    traitement_liste = () =>{
        this.ajouter_evt_tuile()
        this.verifier_inventaire_item()
    }
    
    obtenir_total_produits = () =>{
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=obtenirTotalProduits`
        this.paramAjax['parent'] = this.elt
        requeteAjax(this.paramAjax) 
    }
    
    afficher_produits = () =>{
        let offsetPagination = this.pagination * this.produits_par_page
        let filtre = this.champ_filtre.value
        this.paramAjax['methode'] = "GET"
        this.paramAjax['action'] = `index.php?Ajax&action=afficheListeSuivante&offsetPagination=${offsetPagination}&filtre=${filtre}`
        this.paramAjax['parent'] = this.wrapper_liste
        requeteAjax(this.paramAjax,()=>{ this.traitement_liste() }) 
        // pour effectuer la fonction uniquement quand la requete ajax est terminer
        // la fonction est passé en paramêtre par l'intermédiare d'une fonction anonyme

    }

    activer_boutons = () =>{
        // calcul du nombre de page max (page 1 = 0)
        // dataset.totalProduit est défini dans le fichier requeteAjax
        let pagination_max = Math.floor(this.elt.dataset.totalProduit/this.produits_par_page)

        this.btn_precedent.disabled = this.pagination > 0 ? false : true
        this.btn_suivant.disabled = this.pagination < pagination_max ? false : true       
        
    }

    ajouter_evt_tuile = () =>{
        let items = this.elt.querySelectorAll('[data-js-item]')
        for(let item of items){
            item.addEventListener('click', () => {
                this.incrementer_compteur_panier()
                this.enregistrer_id_item(item)             

            })
        }
    }

    incrementer_compteur_panier = () =>{
        let compteur_panier = document.querySelector('[data-js-compteur-panier]'),
        total_panier = parseInt(compteur_panier.innerHTML)
        compteur_panier.innerHTML = total_panier + 1
    }
    
    enregistrer_id_item = (item) =>{
        //session storage ne prend que les strings
        //création d'un tableau intérmédiaire qui est transformé en Json avant d'être enregistré en session storage
        if(sessionStorage.produitsPanier)
            this.produitsPanier = JSON.parse(sessionStorage.produitsPanier)
        console.log(this.produitsPanier)
        this.produitsPanier.push(item.dataset.itemId)
        sessionStorage.produitsPanier = JSON.stringify(this.produitsPanier) 
    }

    verifier_inventaire_item = () =>{
        let items = this.elt.querySelectorAll('[data-item-inventaire]')
        for(let item of items){
            this.changer_etat_tuile(item)
        }
    }

    changer_etat_tuile = (item) =>{
        if(item.dataset.itemInventaire == "0"){
            if(!item.classList.contains('inventaire_nul'))
                item.classList.add('inventaire_nul')
        }
        else{
            if(item.classList.contains('inventaire_nul'))
                item.classList.remove('inventaire_nul')
        }
    }

    
}