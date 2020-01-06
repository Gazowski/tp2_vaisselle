import { requeteAjax } from './ajax.js'

export class FormulaireCommande{
    constructor(elt){
        this.elt = elt

        this.champs_avec_regex = this.elt.querySelectorAll('[pattern]')
        this.champs_requis = this.elt.querySelectorAll('[required]')
        this.champs_radio_button = this.elt.querySelectorAll('[data-js-radio-cb]')
        this.info_radio_button = this.elt.querySelector('[data-js-erreur-radbutton]')
        this.champ_CB = this.elt.querySelector('[data-js-champ-cb]')
        this.btn_soumettre = this.elt.querySelector('[data-js-submit]')
        this.btn_retour_panier = this.elt.querySelector('[data-js-retour-panier]')

        this.formulaire_valide = true
        
        this.init()
    }

    init = () => {
        this.verifier_champs_avec_regex()
        this.ecouter_radbutton()
        this.btn_soumettre.addEventListener('click', (e) => {
            this.valider_formulaire()
        })
    }
    
    valider_formulaire = () => {
        this.formulaire_valide = true
        this.verifier_champs_requis()
        this.verifier_champs_avec_regex()
        this.afficher_erreur_radbutton()
    }

    verifier_champs_requis = () => {
        for(let champ of this.champs_requis){
            this.est_rempli(champ)
            //this.afficher_message_personnalise(champ)
        }
    }

    est_rempli = (champ) => {
        let zoneInformation = champ.nextElementSibling
        if(champ.value.trim() == ""){
            zoneInformation.innerHTML = "Remplir le champ !"
            this.formulaire_valide = false
        }
    }

    verifier_champs_avec_regex = () => {
        for(let champ of this.champs_avec_regex){
            champ.addEventListener('blur', () => {
                this.informer_erreur_saisie(champ)
                //this.afficher_message_personnalise(champ)
            })
        }    
    }
    
    informer_erreur_saisie = (champ) => {
        let zoneInformation = champ.nextElementSibling,
            regex = RegExp(champ.pattern)
        if(champ.value.trim() == ""){
            this.est_rempli(champ)
        }
        else if(champ.pattern && !regex.test(champ.value)){
            zoneInformation.innerHTML = champ.dataset.messageErreur
            this.formulaire_valide = false
        }
        else
            zoneInformation.innerHTML = ""
    }


    ecouter_radbutton = () =>{
        this.radio_button_cocher = false
        for(let bouton of this.champs_radio_button){
            bouton.addEventListener('change', () => {
                this.radio_button_cocher = true
                this.parametrer_champ_CB(bouton)
            })
        }        
    } 
    
    afficher_erreur_radbutton = () => {
        if(!this.radio_button_cocher)
            this.info_radio_button.innerHTML = "Choisir un type de carte !"
        else
            this.info_radio_button.innerHTML = ""
    }

    parametrer_champ_CB = (typeCB) => {
        this.champ_CB.disabled = false
        this.champ_CB.placeholder = typeCB.dataset.placeholder
        this.champ_CB.pattern = typeCB.dataset.pattern
        this.champ_CB.dataset.messageErreur = typeCB.dataset.messageErreur
        console.log(this.champ_CB)
    }


    


    /* NOTE: la personnalisation des messages dans les 'bulles natives'
            avec element.setCustomValidity modifie le comportement de la validation des champs'
            la pseudo-class :valid ne sera obtenu seulement au prochain appui sur submit,
            ce qui perturbe la coloration des champs valide.
    */
    afficher_message_personnalise = (champ) =>{
        if(champ.value.trim() == "")
            champ.setCustomValidity("Remplir le champ !")
        else if(champ.validity.patternMismatch)
            champ.setCustomValidity(champ.dataset.messageErreur)
        else
            champ.setCustomValidity("")
    }
    

}

/* Voir le fichier formValidation.js (exemple cours 18) */