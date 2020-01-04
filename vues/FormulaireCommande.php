<form action="" 
    method="POST"
    data-js-formulaire-commande>
    <fieldset>
        <legend>Votre identité</legend>
        <ul>
            <li>
                <label for="nom_client">Nom :</label>
                <input id="nom_client" 
                type="text" 
                name="nom"
                placeholder="votre nom"
                required
                data-js-champ-nom><span></span>
            </li>
            <li>
                <label for="prenom_client">Prénom :</label>
                <input id="prenom_client" 
                type="text" 
                name="prenom"
                placeholder="votre prénom"
                required
                data-js-champ-prenom><span></span>
            </li>
            <li>
                <label for="courriel">Courriel :</label>
                <input id="courriel" 
                type="text" 
                name="courriel"
                placeholder="votrecourriel@xyz.ccc"
                required
                data-js-champ-courriel><span></span>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Adresse de Livraison</legend>
        <ul>
            <li>
                <label for="adresse">Adresse :</label>
                <input id="adresse" 
                        type="text" 
                        name="adresse"
                        placeholder="votre rue , votre ville"
                        data-js-champ-adresse><span></span>
            </li>
            <li>
                <label for="CP">Code Postal :</label>
                <input id="CP" 
                type="text" 
                name="CP"
                placeholder="A1B 2C3"
                data-js-champ-CP><span></span>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Mode de Paiement</legend>
        <ul>
            <li>
                <fieldset>
                    <legend>Type de carte bancaire</legend>
                    <ul>
                        <li>
                            <input id="visa" 
                                name="type_de_carte" 
                                type="radio"
                                data-js-champ-CB>
                            <label for="visa">VISA</label>
                        </li>
                        <li>
                            <input id="mastercard" 
                                name="type_de_carte" 
                                type="radio"
                                data-js-champ-CB>
                            <label for="mastercard">Mastercard</label>
                        </li>
                    </ul>
                    <p></p>
                </fieldset>
                </li>
            <li>
                <label for="expiration">Expiration :</label>
                <input id="expiration" 
                        type="text" 
                        name="expiration"
                        placeholder="MM/YY"
                        required
                        data-js-champ-expiration><span></span>
            </li>
            <li>
                <label for="code_securite">Code de sécurité :</label>
                <input id="code_securite" 
                        type="password" 
                        name="code_securite"
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