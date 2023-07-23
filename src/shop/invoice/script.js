// Get and store all required elements
const customerName = sessionStorage.customerName;
const customerEmail = sessionStorage.customerEmail;
const totalPrice = sessionStorage.totalPrice;
const refId = document.querySelector("#refNo");
const cartValue = document.querySelector("#priceTotal");
const nameElement = document.querySelector("#customerName");
const emailElement = document.querySelector("#customerEmail");
const cardNo = document.querySelector("#card-no");
const cardholder = document.querySelector("#cardholder-name");
const expiryMonth = document.querySelector("#expiry-month");
const expiryYear = document.querySelector("#expiry-year");
const securityCode = document.querySelector("#security-code");
const address1 = document.querySelector("#address1");
const city = document.querySelector("#city");
const postcode = document.querySelector("#postcode");
const country = document.querySelector("#country");
const phoneNo = document.querySelector("#phoneNo");
const submitButton = document.querySelector("#confirm-button");
const errorDialog = document.querySelector("#error-dialog");
const errorElement = errorDialog.querySelector("#fieldOutput");
const errorClose = errorDialog.querySelector("#close-warn");

// Generate and store a unique ID in element
refId.innerText = generateUniqueID();
// Get and store total price, customer name, email from store page
cartValue.innerText = "$ " + totalPrice;
nameElement.value = customerName;
emailElement.value = customerEmail;

// Generate a unique ID of numbers from 0 - 9
function generateUniqueID() {
    let id = "";
    const keysArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < keysArr.length; i++) {
        id += keysArr[Math.floor(Math.random() * keysArr.length)];
    }

    return id;
}

// Listen for a click on the submit button
submitButton.addEventListener('click', (event) => {
    // Verify if fields are correctly filled
    let [boolean, field] = verifyData();
    if (!boolean) {
        // Show error 
        errorElement.innerText = field;
        errorDialog.classList.toggle('show-dialog');
    
    } else {
        window.location.replace("checkout/");
    } 

    event.stopPropagation();
})

errorClose.addEventListener('click', (event) => {
    errorDialog.classList.remove('show-dialog');
    event.stopPropagation();
});

function verifyData() {
    if (checkCardNo()){
        return [false, "Card Number"];
    }

    if (isEmpty(cardholder.value)) {
        return [false, "Card Owner"];
    }

    if (checkExpiryMonth()) {
        return [false, "Expiry Month"];
    }

    if (checkExpiryYear()) {
        return [false, "Expiry Year"];
    }

    if (checkSecurityCode()) {
        return [false, "Security Code"];
    }

    if (isEmpty(address1.value)) {
        return [false, "Address 1"];
    }

    if (isEmpty(city.value)) {
        return [false, "City"];
    }

    if (isEmpty(postcode.value)) {
        return [false, "Postal Code"];
    }

    if (isEmpty(country.value)) {
        return [false, "Country"];
    }

    if (isEmpty(nameElement.value)) {
        return [false, "Buyer Name"];
    }

    if (checkEmail()) {
        return [false, "Email"];
    }

    if (checkPhoneNo()) {
        return [false, "Phone No."];
    }

    return [true, ""];
}

function checkCardNo() {
    let value = cardNo.value;
    return (isNaN(value) || isEmpty(value) || isFloat(value));
}

function checkExpiryMonth() {
    let value = expiryMonth.value;
    return (isEmpty(value) || isNaN(value) || isFloat(value) || isOutOfRange(value, 1, 12));
}

function checkExpiryYear() {
    let value = expiryYear.value;
    return (isEmpty(value) || isNaN(value) || isFloat(value) || isOutOfRange(value, 1, 99));
}

function checkSecurityCode() {
    let value = securityCode.value;
    return (isEmpty(value) || isNaN(value) || isFloat(value) || isOutOfRange(value, 0, 999) || isNotOfLength(value, 3));
}

function checkEmail() {
    let value = emailElement.value;
    return (isEmpty(value) || notContain(value, "@", "."));
}

function checkPhoneNo() {
    let value = phoneNo.value;
    if (isEmpty(value)) {
        return false;
    }

    return (isNaN(value), isNotOfLength(value, 10));
}

function isEmpty(value) {
    return (value == "");
}

function isFloat(value) {
    return (value.indexOf('.') != -1);
}

function isOutOfRange(value, lower, upper) {
    return (value < lower || value > upper);
}

function isNotOfLength(value, length) {
    return (value.length != length);
}

function notContain(value, symbol1, symbol2) {
    return !(value.includes(symbol1) && value.includes(symbol2));
}