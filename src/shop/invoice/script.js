const customerName = localStorage.customerName;
const customerEmail = localStorage.customerEmail;
const totalPrice = localStorage.totalPrice;
const refId = document.querySelector("#refNo");
const cartValue = document.querySelector("#priceTotal");


generateUniqueID(refId);
cartValue.innerText = "$ " + totalPrice;

function generateUniqueID() {
    let id = "";
    const keysArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < keysArr.length; i++) {
        id += keysArr[Math.floor(Math.random() * keysArr.length)];
    }

    refId.innerText = id;
}