<!-- formulaire HTML 5 
    écriture du formulaire selon les normes de HTML5
        - voir :  https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire 

        HTML5:
            un élément valide obtient la pseudo-classe :valid (ou :invalid si invalide)
    -->

<form action="" 
    method="POST"
    data-js-formulaire-commande>
    <fieldset>
        <legend>Votre identité</legend>
        <ul>
            <li>
                <label for="nom_client">Nom* :</label>
                <input id="nom_client" 
                type="text" 
                name="nom"
                placeholder="votre nom"
                required
                data-js-champ-nom><span></span>
            </li>
            <li>
                <label for="prenom_client">Prénom* :</label>
                <input id="prenom_client" 
                type="text" 
                name="prenom"
                placeholder="votre prénom"
                required
                data-js-champ-prenom><span></span>
            </li>
            <li>
                <label for="courriel">Courriel* :</label>
                <input id="courriel" 
                type="text" 
                name="courriel"
                pattern="(.+)@(.+){1,}\.(.+){1,}"
                placeholder="votrecourriel@xyz.ccc"
                required
                data-message-erreur = "Entrez un courriel valide !"
                data-js-champ-courriel><span></span>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Adresse de Livraison</legend>
        <ul>
            <li>
                <label for="adresse">Adresse* :</label>
                <input id="adresse" 
                        type="text" 
                        name="adresse"
                        placeholder="votre rue , votre ville"
                        required
                        data-js-champ-adresse><span></span>
            </li>
            <li>
                <label for="CP">Code Postal* :</label>
                <input id="CP" 
                type="text" 
                name="CP"
                pattern="[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d"
                placeholder="A1B 2C3"
                required
                data-message-erreur = "Entrez un code de type A1B 2C3 !"
                data-js-champ-CP><span></span>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Mode de Paiement</legend>
        <ul>
            <li>
                <fieldset>
                    <legend>Type de carte bancaire*</legend>
                    <ul>
                        <li>
                            <input id="visa" 
                                name="type_de_carte" 
                                type="radio"
                                data-js-radio-cb = "visa"
                                data-placeholder = "N° de carte visa"
                                data-pattern = "4[0-9]{12}(?:[0-9]{3})?"
                                data-message-erreur="Ne correspond pas au type VISA !">
                            <label for="visa">VISA</label>
                        </li>
                        <li>
                            <input id="mastercard" 
                                name="type_de_carte" 
                                type="radio"
                                data-js-radio-cb = "mastercard"
                                data-placeholder = "N° de carte mastercard"
                                data-pattern = "5[1-5][0-9]{14}"
                                data-message-erreur="Ne correspond pas au type MASTERCARD !">
                            <label for="mastercard">Mastercard</label>
                        </li>
                        <li>
                            <input id="essai" 
                                name="type_de_carte" 
                                type="radio"
                                data-js-radio-cb = "essai"
                                data-placeholder = "4 chiffres"
                                data-pattern = "[0-9]{4}"
                                data-message-erreur="Ne correspond pas au type ESSAI !">
                            <label for="essai">essai (pattern permissif)</label>
                        </li>
                    </ul>
                    <p data-js-erreur-radbutton></p>
                    <label for="CB">n° carte de crédit*:</label>
                    <input id="CB" 
                            type="text" 
                            name="CB"
                            pattern=""
                            placeholder="choisir un type de carte"
                            required
                            disabled
                            data-js-champ-cb><span></span>
                </fieldset>
                </li>
            <li>
                <label for="expiration">Expiration*:</label>
                <input id="expiration" 
                        type="text" 
                        name="expiration"
                        pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                        placeholder="MM/AA"
                        data-message-erreur = "Entrez une date de type MM/AA !"
                        required
                        data-js-champ-expiration><span></span>
            </li>
            <li>
                <label for="code_securite">Code de sécurité* :</label>
                <input id="code_securite" 
                        type="password" 
                        name="code_securite"
                        pattern="[0-9]\d\d"
                        placeholder="3 chiffres"
                        required
                        data-js-champ-code-securite><span></span>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <input id="infolettre" 
            type="checkbox" 
            name="infolettre"
            data-js-champ-infolettre>
        <label for="infolettre">S'inscrire à l'infolettre</label>
    </fieldset>
    <fieldset>
        <input type="submit"
        value="Soumettre"
        data-js-submit>
        <button data-js-retour-panier>revenir au panier</button>
    </fieldset>
</form>