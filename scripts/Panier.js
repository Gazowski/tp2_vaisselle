import { ItemPanier } from './ItemPanier'
import { requeteAjax } from './ajax.js'


export class Panier{
    constructor(elt,header){
        this.elt = elt
        this.header = header
        this.items = this.elt.querySelectorAll('[data-js-item]')
        this.montants_par_item = this.elt.querySelectorAll('[data-js-montant-item]')
        this.montant_panier = this.elt.querySelector('[data-js-montant-panier]')
        this.champs_selection_quantite = this.elt.querySelectorAll('[data-js-choix-quantite]')
        
        this.init()
    }

    init = () => {
        this.instancier_items_panier()
        this.calculer_et_afficher_montant_total_panier()
        this.ajouter_evt_choix_quantite()
    }

    instancier_items_panier = () => {
        for(let item of this.items)
            new ItemPanier(item)
    }

    calculer_et_afficher_montant_total_panier = () => {
        let montant_total_panier = 0
        for(let item of this.montants_par_item)
            montant_total_panier += parseInt(item.innerHTML)
        this.montant_panier.innerHTML = montant_total_panier
    }

    ajouter_evt_choix_quantite = () => {
        for(let champ of this.champs_selection_quantite){
            champ.addEventListener('change', () => {
                this.calculer_et_afficher_montant_total_panier()
                this.header.calculer_et_afficher_compteur_panier()
            })
        }
    }
}