document.addEventListener("DOMContentLoaded", function() {

    let elRestaurantList = document.querySelector('[data-js-restaurant-list]');
    if (elRestaurantList) new RestaurantList(elRestaurantList);
    

    let elRestaurantTypes = document.querySelector('[data-js-restaurant-types]');
    if (elRestaurantTypes) new RestaurantType(elRestaurantTypes);
    
});