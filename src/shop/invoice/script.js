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


generateUniqueID(refId);
cartValue.innerText = "$ " + totalPrice;
nameElement.value = customerName;
emailElement.value = customerEmail;

function generateUniqueID() {
    let id = "";
    const keysArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < keysArr.length; i++) {
        id += keysArr[Math.floor(Math.random() * keysArr.length)];
    }

    refId.innerText = id;
}

submitButton.addEventListener('click', (event) => {
    let [boolean, field] = verifyData();
    if (!boolean) {
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
    if (isNaN(cardNo.value) || cardNo.value == "" || cardNo.value.toString().indexOf('.') != -1){
        return [false, "Card Number"];
    }

    if (cardholder.value == "") {
        return [false, "Card Owner"];
    }

    if (expiryMonth.value == "" || isNaN(expiryMonth.value) || expiryMonth.value < 1 ||
        expiryMonth.value > 12 || expiryMonth.value.toString().indexOf('.') != -1) {
        return [false, "Expiry Month"];
    }

    if (expiryYear.value == "" || isNaN(expiryYear.value) || expiryYear.value < 1 ||
        expiryYear.value > 99 || expiryYear.value.toString().indexOf('.') != -1) {
        return [false, "Expiry Year"];
    }

    if (securityCode.value == "" || isNaN(securityCode.value) || securityCode.value < 0 ||
        securityCode.value > 999 || securityCode.value.toString().indexOf('.') != -1 ||
        securityCode.value.length < 3) {
        return [false, "Secuirty Code"];
    }

    if (address1.value == "") {
        return [false, "Address 1"];
    }

    if (city.value == "") {
        return [false, "City"];
    }

    if (postcode.value == "") {
        return [false, "Postal Code"];
    }

    if (country.value == "") {
        return [false, "Country"];
    }

    if (nameElement.value == "") {
        return [false, "Buyer Name"];
    }

    if (emailElement.value == "" || !emailElement.value.includes('@') || !emailElement.value.includes('.')) {
        return [false, "Email"];
    }

    if (isNaN(phoneNo.value) || (phoneNo.value.length != 10 && phoneNo.value != "")) {
        return [false, "Phone No."];
    }

    return [true, ""];
}