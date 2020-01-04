import { requeteAjax } from './ajax.js'

export class FormulaireCommande{
    constructor(elt){
        this.elt = elt
        this.champ_nom = this.elt.querySelector('[data-js-champ-nom]') 
        this.champ_prenom = this.elt.querySelector('[data-js-champ-prenom]') 
        this.champ_courriel = this.elt.querySelector('[data-js-champ-courriel]') 
        this.champ_adresse = this.elt.querySelector('[data-js-champ-adresse]') 
        this.champ_code_postal = this.elt.querySelector('[data-js-champ-CP]') 
        this.champs_CB = this.elt.querySelectorAll('[data-js-champ-CB]') 
        this.champ_expiration = this.elt.querySelector('[data-js-champ-expiration]') 
        this.champ_code_securite = this.elt.querySelector('[data-js-champ-code-securite]') 
        this.champ_infolettre = this.elt.querySelector('[data-js-champ-infolettre]')
        this.champs_requis = this.elt.querySelectorAll('[required]') 
        this.btn_soumettre = this.elt.querySelector('[data-js-submit]') 
        this.btn_retour_panier = this.elt.querySelector('[data-js-retour-panier]')
        
        this.nom = this.champ_nom.value
        this.prenom = this.champ_prenom.value
        this.adresse = this.champ_adresse.value
        this.CB = this.champs_CB.value
        this.expiration = this.champ_expiration.value
        this.formulaire_valide
        
        this.courriel = []
        this.courriel['champ'] = this.champ_courriel
        this.courriel['regex'] = /(.+)@(.+){1,}\.(.+){1,}/
        this.code_postal = []
        this.code_postal['champ'] = this.champ_code_postal
        this.code_postal['regex'] = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
        this.expiration = []
        this.expiration['champ'] = this.champ_expiration
        this.expiration['regex'] = /[\d]{2}\/[\d]{2}/
        this.code_securite = []
        this.code_securite['champ'] = this.champ_code_securite
        this.code_securite['regex'] = /[0-9]\d\d/
        
        this.init()
    }

    init = () => {
        this.verifier_champs_avec_regex()
        this.btn_soumettre.addEventListener('click', (e) => {
            e.preventDefault()
            this.valider_formulaire()
        })
    }
    
    valider_formulaire = () => {
        this.formulaire_valide = true
        this.verifier_champs_requis()
        this.verifier_champs_avec_regex()
    }

    verifier_champs_requis = () => {
        for(let champ of this.champs_requis)
            this.est_rempli(champ)
    }

    verifier_champs_avec_regex = () => {
        this.verifier_regex(this.courriel)
        this.verifier_regex(this.code_postal)
        this.verifier_regex(this.expiration)
        this.verifier_regex(this.code_securite)        
    }


    verifier_regex = (element) =>{
        element['champ'].addEventListener('input', () => {
            this.verifier_saisie(element)
        })
        element['champ'].addEventListener('blur', () => {
            this.informer_erreur_saisie(element)
        })
    }

    verifier_saisie = (element) => {
        let zoneInformation = element['champ'].nextElementSibling
        zoneInformation.innerHTML = ""
        if(element['regex'].test(element['champ'].value) && !element['champ'].classList.contains('saisie_vert')){
            element['champ'].classList.add('saisie_vert')
            if(element['champ'].classList.contains('saisie_rouge'))
                element['champ'].classList.remove('saisie_rouge')
        }
        else if(!element['regex'].test(element['champ'].value) && !element['champ'].classList.contains('saisie_rouge')){
            element['champ'].classList.add('saisie_rouge')
            if(element['champ'].classList.contains('saisie_vert'))
                element['champ'].classList.remove('saisie_vert')
        }
            
    }

    informer_erreur_saisie = (element) => {
        let zoneInformation = element['champ'].nextElementSibling
        if(element['champ'].value.trim() == ""){
            est_rempli(element['champ'])
        }
        else if(!element['regex'].test(element['champ'].value)){
            zoneInformation.innerHTML = "Remplir le champ correctement"
            this.formulaire_valide = false
        }
    }
    
    est_rempli = (champ) => {
        let zoneInformation = champ.nextElementSibling
        if(champ.value.trim() == ""){
            zoneInformation.innerHTML = "Le champ doit être rempli !"
            this.formulaire_valide = false
        }

    }

}

/* Voir le fichier formValidation.js (exemple cours 18) */