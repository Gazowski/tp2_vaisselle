export class ItemPanier{
    constructor(elt){
        this.elt = elt
        this.champ_selection_quantite = this.elt.querySelector('[data-js-choix-quantite]')
        this.el_montant_total = this.elt.querySelector('[data-js-montant-item]')

        this.init()
    }

    init = () => {
        this.champ_selection_quantite.addEventListener('change', () => {
            this.calculer_et_afficher_montant_total()
        })
    }

    calculer_et_afficher_montant_total = () => {
        let montant_total = this.champ_selection_quantite.value * this.elt.dataset.itemPrix
        this.el_montant_total.innerHTML = montant_total
    }

}