const addToCart = document.querySelector("#addToCart");
const shoppingCartIndication = document.querySelector(".shoppingCartIndication");
const numerOfItems = document.querySelector(".numerOfItems");
const addedToCartConfirmation = document.querySelector("#addedToCartConfirmation");

let countNumberOfItems = 0;

numerOfItems.innerHTML = countNumberOfItems;

addToCart.onclick = function () {
    countNumberOfItems++;
    numerOfItems.innerHTML = countNumberOfItems;
    shoppingCartIndication.style.display = "inline";
    addedToCartConfirmation.innerHTML = "Product was successfully added to you cart.";
    
    setTimeout (function() {
        addedToCartConfirmation.innerHTML ="";
    }, 1500);
};



