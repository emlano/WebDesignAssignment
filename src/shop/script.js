//  Get DOM tags and save them to variables
 const cart = document.getElementById("cart");
 const cartButton = document.getElementById("cart-button");
 const allBuyButtons = document.querySelectorAll('.buy-button');
 const screenBlur = document.getElementById("screen-blur");
 const alertButton = document.getElementById("close-alert");
 const checkoutConfirmPanel = document.getElementById("checkout-confirm");
 const checkoutConfirm = document.getElementById("confirm-button");
 const checkoutCancel = document.getElementById("cancel-button");
 const checkoutName = document.getElementById("text-input-name");
 const checkoutEmail = document.getElementById("text-input-email");
 const badInput = document.getElementById("bad-input-warn");
 const warnCloseButton = document.getElementById("close-warn");
 
//  Initiate cart, all items are stored here, and customer name, email
 var cartArray = [];
 var totalPrice = 0;

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
    let itemInfo = element.parentNode.querySelector('.item-info');
    // Get item name
    let itemName = itemInfo.querySelector('.item-name').innerText;
    // Get item's price
    let itemPrice = itemInfo.querySelector('.price').innerText.slice(2);
    // Get the amount of items required by the user
    let itemAmount = element.parentNode.querySelector('.item-amount').querySelector('.amount').value;
    // Convert price float
    itemPrice = parseFloat(itemPrice);
    // Send data to be stored in cart
    storeDataInCart(itemName, itemPrice, itemAmount);
 }

 function storeDataInCart(itemName, itemPrice, itemAmount) {
    // Check if the user has entered an unreasonable value for amount required
    // If yes, do not add object to cart
    if (itemAmount.toString().indexOf('.') != -1) {
        screenBlur.classList.toggle("show-screen-blur");
        return;
    }

    itemAmount = parseInt(itemAmount);

    // Check if the itemAmount is in range
    if (itemAmount < 1 || itemAmount > 5 || isNaN(itemAmount)) {
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
    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].name == item.name && cartArray[i].price == item.price) {
            cartArray[i].amount = cartArray[i].amount + item.amount;
            return;
        }
    }
    
    // If item is not in cart, push it to the array
    cartArray.push(item);
}

function fillCartTable() {
    totalPrice = 0;
    // Initialize variable to calculate total
    // Initialize all element containers
    let table, tr, th, td, clearCartButton, checkoutButton, total, para;
    // Create table element with data
    table = elementFrom("table", "id", "cart-listing", "");
    // Create table row element
    tr = elementFrom("tr", "class", "item-rows", "");
    // Create table header element
    th = elementFrom("th", "id", "item-name-heading", "Item");
    // Add table header element to table row
    tr.appendChild(th);

    th = elementFrom("th", "id", "item-amount-heading", "Amount");
    tr.appendChild(th);

    th = elementFrom("th", "id", "item-price-heading", "Price");
    tr.appendChild(th);
    // Add table row element to table
    table.appendChild(tr);

    // Iterate through the array
    for (let i = 0; i < cartArray.length; i++) {
        // Get the price of all same type items in cart (item.price * item.amount)
        let priceOfAll = normalizePrice(cartArray[i].price, cartArray[i].amount);
        // Increment total with that value
        totalPrice += parseFloat(priceOfAll);
        // Create table row element
        tr = elementFrom("tr", "class", "item-rows", "");
        // Create table data element
        td = elementFrom("td", "", "", cartArray[i].name);
        // Append table data element to table row
        tr.appendChild(td);

        td = elementFrom("td", "class", "listed-amount", cartArray[i].amount + " pcs.");
        tr.appendChild(td);

        td = elementFrom("td", "class", "item-price", "$    " + priceOfAll);
        tr.appendChild(td);
        // Append table row to table
        table.appendChild(tr);
        // Replace all contents of cart element with the table element 
        cart.replaceChildren(table);
    }

    // Get total price up to 2 decimal places
    totalPrice = totalPrice.toFixed(2);
    // Create clear cart button
    clearCartButton = elementFrom("button", "id", "clear-cart-enabled", "Clear Cart");

    // Event listner for the clear cart button in cart
    clearCartButton.addEventListener('click', (event) => {
        // Clear whole cart
        clearCart();
        // Close cart as it is empty
        cart.classList.remove('show-cart');
        event.stopPropagation();
    })

    // Add button to cart panel
    cart.appendChild(clearCartButton);

    // Create check out button
    checkoutButton = elementFrom("button", "id", "checkout-enabled", "Check Out");

    //  Event Listner for check out button in cart
    checkoutButton.addEventListener('click', (event) => {
        // Hide cart
        cart.classList.remove('show-cart');
        // Show checkout confirmation dialog
        checkoutConfirmPanel.classList.toggle("show-screen-blur");
    })

    cart.appendChild(checkoutButton);
    // Create total div
    total = elementFrom("div", "id", "total-price", "");
    // Create total div contents
    para = elementFrom("p", "", "", "Total  ");
    total.appendChild(para);

    para = elementFrom("p", "", "", "$ " + totalPrice);
    total.appendChild(para);

    // Add total div to cart element
    cart.appendChild(total);
}

// Create a HTML element from passed in data
// Type -> element type
// Group -> element group ( id/class )
// GroupID -> group name
// innerData -> Text within the element
function elementFrom(type, group, groupID, innerData) {
    let element = document.createElement(type);
    // If group given, set element group
    if (group != "") {
        element.setAttribute(group, groupID);
    }
    // If innertext given set innerText
    if (innerData != "") {
        element.innerText=innerData;
    }
    return element; 
}

// Get price of all items of the same type up to two decimal numbers
function normalizePrice(price, amount) {
    let decimal = price * amount;
    decimal = decimal.toFixed(2);
    return decimal;
}

// If clear cart button is pressed, replace written HTML with the placeholder HTML
 function clearCart() {
    // Initialize placeholder element containers
    let para, clearCartButton, checkoutButton
    // Create placeholder text element
    para = elementFrom("p", "id", "cart-placeholder", "No Items in Cart!");
    // Create disabled cart buttons
    clearCartButton = elementFrom("div", "id", "clear-cart-disabled", "Clear Cart");
    // Creaete disabled checkout buttons
    checkoutButton = elementFrom("div", "id", "checkout-disabled", "Check Out");

    // Replace all elements within cart element with newly created para element
    cart.replaceChildren(para);
    // Append disabled buttons to cart
    cart.appendChild(clearCartButton);
    cart.appendChild(checkoutButton);

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

// While cart open, if click occures outside of cart panel
window.addEventListener('click', (event) => {
    if (!(event.target.closest("#cart"))) {
        // Close cart
        cart.classList.remove("show-cart");
        event.stopPropagation();
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

// Event listner for checkout confirmation dialog, confirm button
checkoutConfirm.addEventListener('click', (event) => {
    // Check if name field is empty or email field is invalid, return if true
    if (checkoutName.value == "" || !checkoutEmail.value.includes('@') || !checkoutEmail.value.includes('.')) {
        console.log("hello");
        badInput.classList.toggle("show-screen-blur");
        warnCloseButton.addEventListener('click', (event) => {
            // Check if alert is open
            if (badInput.classList.contains("show-screen-blur")) {
                // Closes alert
                badInput.classList.remove("show-screen-blur");
                // Stop propagation of click
                event.stopPropagation();
            }
        })
    // Else store customer name and email
    } else {
        checkoutConfirmPanel.classList.remove("show-screen-blur");
        sessionStorage.setItem("customerName", checkoutName.value);
        sessionStorage.setItem("customerEmail", checkoutEmail.value);
        sessionStorage.setItem("totalPrice", totalPrice);
        window.location.replace("invoice/");

    } 
})

// Event listner for checkout dialog cancel button
checkoutCancel.addEventListener('click', (event) => {
    // Hide checkout confirmation dialog when pressed
    if (checkoutConfirmPanel.classList.contains("show-screen-blur")) {
        checkoutConfirmPanel.classList.remove("show-screen-blur");
    }
})