class RestaurantType {
    constructor(el) {
        this._el = el;
        this._elSelect = this._el.querySelector('[data-js-select]');
        this._elSubmit = this._el.querySelector('[data-js-btn]');
        this._elResults = this._el.querySelector('[data-js-results]');

        this.init();
    }

    init = (e) => {

        this._elSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            this.showRestaurantByType();
        });
    }


    showRestaurantByType = () => {

        // déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        // initialisation de la requête

        if(xhr) {	

            //console.log(elSelectTypes.value)

            let idRestaurant = encodeURIComponent(this._elSelect.value);
            
            xhr.open("GET", "index.php?Restaurants_Par_Type&action=" + idRestaurant);

            //2ème étape - spécifier la fonction de callback
            xhr.addEventListener("readystatechange", () => {

                if(xhr.readyState === 4) {							
                    if(xhr.status === 200) {

                        //les données ont été reçues
                        this._elResults.innerHTML = xhr.responseText;

                    } else if (xhr.status === 404) {
                        //la page demandée n'existe pas
                    }
                }
            });
            //3ème étape - envoi de la requête
            xhr.send();
        }
    }
}