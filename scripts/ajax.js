export let requeteAjax = (data) => {

    // déclaration de l'objet XMLHttpRequest
    var xhr;
    xhr = new XMLHttpRequest();
    // initialisation de la requête

    if(xhr) {	

        xhr.open(data['methode'], data['action']);

        //2ème étape - spécifier la fonction de callback
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4) {							
                if(xhr.status === 200) {
                    //les données ont été reçues
                    if(data['action'].includes('afficheListeSuivante')){
                        data['parent'].innerHTML = xhr.responseText}
                    else if(data['action'].includes('obtenirTotalProduits')){
                        console.log(data['parent'])
                        data['parent'].dataset.totalProduit = xhr.responseText
                    }

                } else if (xhr.status === 404) {
                    //la page demandée n'existe pas
                    console.log('erreur')
                }
            }
        });
        //3ème étape - envoi de la requête
        xhr.send();
    }
}