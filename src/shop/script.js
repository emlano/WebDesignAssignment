//  Get DOM tags and save them to variables
 const cart = document.getElementById("cart");
 const cartButton = document.getElementById("cart-button");
 const allBuyButtons = document.querySelectorAll('.buy-button');
 const screenBlur = document.getElementById("screen-blur");
 const alertButton = document.getElementById("close-alert");
 
//  Initiate cart, all items are stored here
 var cartArray = [];

//  Add event listeners for all 'add to cart' buttons
 for (var i = 0; i < allBuyButtons.length; i++) {
    // If clicked..
    allBuyButtons[i].addEventListener('click', function() {
        // Get data from that item panel
        getData(this);

    });
 }

 function getData(element) {
    // Get clicked buttons' parent element
    var itemInfo = element.parentNode.querySelector('.item-info');
    // Get item name
    var itemName = itemInfo.querySelector('.item-name').innerText;
    // Get item's price
    var itemPrice = itemInfo.querySelector('.price').innerText.slice(2);
    // Get the amount of items required by the user
    var itemAmount = element.parentNode.querySelector('.item-amount').querySelector('.amount').value;
    // Convert price float
    itemPrice = parseFloat(itemPrice);
    // Send data to be stored in cart
    storeDataInCart(itemName, itemPrice, itemAmount);
 }

 function storeDataInCart(itemName, itemPrice, itemAmount) {
    // Check if the user has entered an unreasonable value for amount required
    // If yes, do not add object to cart
    if (isNaN(itemAmount) || itemAmount.toString().indexOf('.') != -1) {
        screenBlur.classList.toggle("show-screen-blur");
        return;
    }

    itemAmount = parseInt(itemAmount);

    // Check if the itemAmount is in range
    if (itemAmount < 1 || itemAmount > 5) {
        screenBlur.classList.toggle("show-screen-blur");
        return;
    }

    // Create a object from passed in data
    const item = {
        name : itemName,
        price : itemPrice,
        amount : itemAmount,
    }

    // Iterate through array and check if item is already in cart
    // If yes, simply increase that items amount instead of pushing a new object into the array
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].name == item.name && cartArray[i].price == item.price) {
            cartArray[i].amount = cartArray[i].amount + item.amount;
            return;
        }
    }
    
    // If item is not in cart, push it to the array
    cartArray.push(item);
}

function fillCartTable() {
    // Initialize variable to calculate total
    var totalPrice = 0;
    // Initialize string that would be passed to markup with 'innerHTML'
    var outputString = "<table id=\"cart-listing\">" + "<tr class=\"item-rows\">";
    // Add table headers
    outputString += "<th id=\"item-name-heading\">Item</th>";
    outputString += "<th id=\"item-amount-heading\">Amount</th>" + "<th id=\"item-price-heading\">Price</th>" + "</tr>";

    // Iterate through the array
    for (var i = 0; i < cartArray.length; i++) {
        // Get the price of all same type items in cart (item.price * item.amount)
        var priceOfAll = normalizePrice(cartArray[i].price, cartArray[i].amount);
        // Increment total with that value
        totalPrice += parseFloat(priceOfAll);
        // Write item row into the table
        outputString += "<tr id=\"item-rows\">" + "<td>" + cartArray[i].name +"</td>";
        outputString += "<td class=\"listed-amount\">" + cartArray[i].amount + "&nbsp;pcs.</td>";
        outputString += "<td class=\"item-price\">$&emsp;" + priceOfAll + "</td>";
        // Write row end
        outputString += "</tr>";
    }

    // Get total price up to 2 decimal places
    totalPrice = totalPrice.toFixed(2);

    // Write end of the table, clear card, checkout buttons
    outputString += "</table>" + "<button id=\"clear-cart-enabled\">Clear Cart</button>";
    outputString += "<button id=\"checkout-enabled\">Check Out</button>";
    // Write total to the cart
    outputString += "<div id=\"total-price\">";
    outputString += "<p>Total&nbsp;&nbsp;</p>" + "<p>$&nbsp;" + totalPrice + "</p>";

    // Push the complete string into the cart tag
    cart.innerHTML=outputString;
    // Create a variable to initialize a even listener for the clear cart button
    const clearCartButton = document.getElementById('clear-cart-enabled');
}

// Get price of all items of the same type up to two decimal numbers
function normalizePrice(price, amount) {
    var decimal = price * amount;
    decimal = decimal.toFixed(2);
    return decimal;
}

// If clear cart button is pressed, replace written HTML with the placeholder HTML
 function clearCart() {
    cart.innerHTML="<p id=\"cart-placeholder\">No Items in Cart!</p>" +
    "<div id=\"clear-cart-disabled\">Clear Cart</div>" + 
    "<div id=\"checkout-disabled\">Check Out</div>";
    // Empty cart
    cartArray = [];

 }

//  Event listener for show cart button at navigation bar 
cartButton.addEventListener('click', (event) => {
    // If cart is not empty, write cartArray data to the cart first
    if (cartArray.length != 0) { fillCartTable(); }
    // Drop down cart
    cart.classList.toggle("show-cart");
    // Stop click closing the cart immediately upon opening
    event.stopPropagation();
})

// Event listner for the clear cart button in cart
document.addEventListener('click', (event) => {
    // Check if user clicked within the cart panel
    if (event.target.closest('#cart')) {
        // Check if user clicked on the clear cart button
        if (event.target.closest('#clear-cart-enabled')) {
            // Clear whole cart
            clearCart();
            // Close cart as it is empty
            cart.classList.remove('show-cart');
            event.stopPropagation();
        }
        // If clear cart button was not pressed ignore click
        return;
    
    // If click didn't occur within the cart panel, close cart
    } else {
        cart.classList.remove('show-cart');
    }
})

// Event listener for alert 'OK' button, when clicked closes alert
alertButton.addEventListener('click', (event) => {
    // Check if alert is open
    if (screenBlur.classList.contains("show-screen-blur")) {
        // Closes alert
        screenBlur.classList.remove("show-screen-blur");
        // Stop propagation of click
        event.stopPropagation();
    }
})