import { requeteAjax } from './ajax.js'

export class FormulaireCommande{
    constructor(elt){
        this.elt = elt
        
        this.champs_formulaire = this.elt.querySelectorAll('input')
        this.champs_avec_regex = this.elt.querySelectorAll('[pattern]')
        this.champs_requis = this.elt.querySelectorAll('[required]')
        this.champs_avec_masque = this.elt.querySelectorAll('[data-mask]')
        this.champs_radio_button = this.elt.querySelectorAll('[data-js-radio-cb]')
        this.indice_regex = document.querySelector('[data-js-indice-regex]')
        this.btn_soumettre = this.elt.querySelector('[data-js-submit]')
        this.btn_retour_panier = this.elt.querySelector('[data-js-retour-panier]')

        this.formulaire_valide = false
        this.usager_dans_database = false
        this.champs = {}
        this.paramAjax = []
        
        this.init()
    }

    init = () => {
        this.creer_variables_champ()
        this.verifier_champs_avec_regex()
        this.ecouter_radbutton()
        this.afficher_masque()
        this.btn_soumettre.addEventListener('click', (e) => {
            e.preventDefault()
            this.valider_formulaire()
            this.enregister_usager()
        })
        this.champs.courriel.addEventListener('blur', () => {
            this.est_dans_database()
        })
    }

    creer_variables_champ = () => {
        for(let champ of this.champs_formulaire){
            this.champs[champ.name] = champ 
        }
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
                this.afficher_masque(this.champs.CB)
            })
        }        
    } 

    parametrer_champ_CB = (typeCB) => {
        this.champs.CB.disabled = false
        this.indice_regex.innerHTML = typeCB.dataset.placeholder
        this.champs.CB.pattern = typeCB.dataset.pattern
        this.champs.CB.dataset.messageErreur = typeCB.dataset.messageErreur
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
    est_dans_database = () => {
        this.paramAjax['methode'] = "POST"
        this.paramAjax['action'] = "index.php?Ajax&action=verifierPresenceUsager"
        this.paramAjax['donnees_a_envoyer'] = this.champs.courriel.value
        requeteAjax(this.paramAjax, (reponse_ajax) => {
            this.usager_dans_database = (reponse_ajax.trim() != '')? true : false
        })
    }

    enregister_usager = () => {
        if(this.formulaire_valide && !this.usager_dans_database){
            let info_usager = {
                nom : this.champs.nom.value,
                prenom : this.champs.prenom.value,
                adresse : this.champs.adresse.value,
                courriel : this.champs.courriel.value,
                optin : (this.champs.infolettre.checked)? 1 : 0
            }
            this.paramAjax['methode'] = "POST"
            this.paramAjax['action'] = "index.php?Ajax&action=enregistrerUsager"
            this.paramAjax['donnees_a_envoyer'] = info_usager
            requeteAjax(this.paramAjax, (reponse_ajax) => {
                console.log(reponse_ajax)
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