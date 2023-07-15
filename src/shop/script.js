 const cart = document.getElementById("cart");
 const cartButton = document.getElementById("cart-button");
 const allBuyButtons = document.querySelectorAll('.buy-button');
 var cartArray = [];

 for (var i = 0; i < allBuyButtons.length; i++) {
    allBuyButtons[i].addEventListener('click', function() {
        getData(this);

    });
 }

 function getData(element) {
    var itemInfo = element.parentNode.querySelector('.item-info');
    var itemName = itemInfo.querySelector('.item-name').innerText;
    var itemPrice = itemInfo.querySelector('.price').innerText.slice(2);
    var itemAmount = element.parentNode.querySelector('.item-amount').querySelector('.amount').value;
    itemPrice = parseFloat(itemPrice);
    itemAmount = parseInt(itemAmount);
    storeDataInCart(itemName, itemPrice, itemAmount);
 }

 function storeDataInCart(itemName, itemPrice, itemAmount) {
    const item = {
        name : itemName,
        price : itemPrice,
        amount : itemAmount,
    }
    
    if (item.amount < 1 || item.amount > 5) {
        return;
    }

    cartArray.push(item);
    console.log(cartArray);
 }

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