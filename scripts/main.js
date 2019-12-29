import { Header } from "./Header.js"

document.addEventListener("DOMContentLoaded", function() {

    let elHeader = document.querySelector('header')
    if (elHeader)
        new Header(elHeader)
    
    
});