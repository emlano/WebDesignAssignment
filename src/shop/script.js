 const cart = document.getElementById("cart");
 const cartButton = document.getElementById("cart-button");

cartButton.addEventListener('click', (event) => {
    cart.classList.toggle("show-cart");
    event.stopPropagation();
})

document.addEventListener('click', (event) => {
    if (event.target.closest('#cart')) {
        return;
    }

    cart.classList.remove('show-cart');
})