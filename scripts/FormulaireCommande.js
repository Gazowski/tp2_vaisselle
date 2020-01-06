import { requeteAjax } from './ajax.js'

export class FormulaireCommande{
    constructor(elt){
        this.elt = elt
        
        this.champs_avec_regex = this.elt.querySelectorAll('[pattern]')
        this.champs_requis = this.elt.querySelectorAll('[required]')
        this.champs_avec_masque = this.elt.querySelectorAll('[mask]')
        this.champs_radio_button = this.elt.querySelectorAll('[data-js-radio-cb]')
        this.champ_CB = this.elt.querySelector('[data-js-champ-cb]')
        this.indice_regex = document.querySelector('[data-js-indice-regex]')
        this.btn_soumettre = this.elt.querySelector('[data-js-submit]')
        this.btn_retour_panier = this.elt.querySelector('[data-js-retour-panier]')

        this.formulaire_valide = true
        
        this.init()
    }

    init = () => {
        this.verifier_champs_avec_regex()
        this.ecouter_radbutton()
        this.afficher_masque()
        this.btn_soumettre.addEventListener('click', (e) => {
            this.valider_formulaire()
        })
    }
    
    valider_formulaire = () => {
        this.formulaire_valide = true
        this.verifier_champs_requis()
        this.informer_erreur_saisie()
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
    
    informer_erreur_saisie = (champ = '') => {
        let liste_champs = (champ == '') ? this.champs_avec_regex : [champ]
        for(let chp of liste_champs){
            let zoneInformation = chp.nextElementSibling,
                regex = RegExp(chp.pattern)
            if(chp.value.trim() == ""){ 
                this.est_rempli(chp)
            }
            else if(chp.pattern && !regex.test(chp.value)){
                zoneInformation.innerHTML = chp.dataset.messageErreur
                this.formulaire_valide = false
            }
            else
                zoneInformation.innerHTML = ""
        }
    }


    ecouter_radbutton = () =>{
        this.radio_button_cocher = false
        for(let bouton of this.champs_radio_button){
            bouton.addEventListener('change', () => {
                this.radio_button_cocher = true
                this.parametrer_champ_CB(bouton)
                this.afficher_masque(this.champ_CB)
            })
        }        
    } 

    parametrer_champ_CB = (typeCB) => {
        this.champ_CB.disabled = false
        this.indice_regex.innerHTML = typeCB.dataset.placeholder
        this.champ_CB.pattern = typeCB.dataset.pattern
        this.champ_CB.dataset.messageErreur = typeCB.dataset.messageErreur
    }

    afficher_masque = (champ = '') => {
        let liste_champs = (champ == '') ? this.champs_avec_masque : [champ]
        for(let c of liste_champs){
            /* fonction IMask est une fonction de la librairie IMask.js.
                elle permet le formattage des entrées utilisateur et évite les erreurs.
            */
            IMask(c ,{
                mask: c.dataset.mask,
                lazy: false // affiche le masque
            })
        }
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