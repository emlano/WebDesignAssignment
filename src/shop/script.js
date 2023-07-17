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

    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].name == item.name && cartArray[i].price == item.price) {
            cartArray[i].amount = cartArray[i].amount + item.amount;
            return;
        }
    }

    cartArray.push(item);
}

function fillCartTable() {
    var totalPrice = 0;
    var outputString = "<table id=\"cart-listing\">" + "<tr class=\"item-rows\">";
    outputString += "<th id=\"item-name\">Item</th>";
    outputString += "<th id=\"item-amount\">Amount</th>" + "<th id=\"item-price\">Price</th>" + "</tr>";

    for (var i = 0; i < cartArray.length; i++) {
        var priceOfAll = normalizePrice(cartArray[i].price, cartArray[i].amount);
        totalPrice += parseFloat(priceOfAll);
        outputString += "<tr id=\"item-rows\">" + "<td>" + cartArray[i].name +"</td>";
        outputString += "<td class=\"listed-amount\">" + cartArray[i].amount + "&nbsp;pcs.</td>";
        outputString += "<td class=\"item-price\">$&emsp;" + priceOfAll + "</td>";
        outputString += "</tr>";
    }

    totalPrice = totalPrice.toFixed(2);

    outputString += "</table>" + "<button id=\"clear-cart-enabled\">Clear Cart</button>";
    outputString += "<button id=\"checkout-enabled\">Check Out</button>";
    outputString += "<div id=\"total-price\">";
    outputString += "<p>Total&nbsp;&nbsp;</p>" + "<p>$&nbsp;" + totalPrice + "</p>";

    cart.innerHTML=outputString;
    const clearCartButton = document.getElementById('clear-cart-enabled');
}

function normalizePrice(price, amount) {
    var decimal = price * amount;
    decimal = decimal.toFixed(2);
    return decimal;
}

 function clearCart() {
    cart.innerHTML="<p id=\"cart-placeholder\">No Items in Cart!</p>" +
    "<div id=\"clear-cart-disabled\">Clear Cart</div>" + 
    "<div id=\"checkout-disabled\">Check Out</div>";
    cartArray = [];

 }

cartButton.addEventListener('click', (event) => {
    if (cartArray.length != 0) { fillCartTable(); }
    cart.classList.toggle("show-cart");
    event.stopPropagation();
})

document.addEventListener('click', (event) => {
    if (event.target.closest('#cart')) {
        if (event.target.closest('#clear-cart-enabled')) {
            clearCart();
        }

        return;
    
    } else {
        cart.classList.remove('show-cart');
    }
})