const cartList = document.getElementById('cart__items');
let totalQuantity = document.getElementById('totalQuantity');
let totalPrice = document.getElementById('totalPrice');

let inputFirstName = document.getElementById('firstName');
let inputFirstNameErr = document.getElementById('firstNameErrorMsg');
let inputLastName = document.getElementById('lastName');
let inputLastNameErr = document.getElementById('lastNameErrorMsg');
let inputAddress = document.getElementById('address');
let inputAddressErr = document.getElementById('addressErrorMsg');
let inputCity = document.getElementById('city');
let inputCityErr = document.getElementById('cityErrorMsg');
let inputEmail = document.getElementById('email');
let inputEmailErr = document.getElementById('emailErrorMsg');
let inputButton = document.getElementById('order');

const regexStandard = /([A-Z])([a-z]+)/;
const regexAddress = /(\d+)(\s\w+)+/;
const regexEmail = /\S+@\S+\.\S+/;

let cartItems = JSON.parse(localStorage.getItem('cart'));

let cartTotalPrice = 0;
let cartTotalQuantity = 0;

createCartList(cartItems);

function createCartList(array) {
    const length = array.length;
    for (let i in array) {
        let product = array[i];
        createCartItem(product);
        cartTotalQuantity += parseInt(product.quantity);
        cartTotalPrice += parseInt(product.price * product.quantity);
        totalQuantity.innerHTML = [cartTotalQuantity];
        totalPrice.innerHTML = [cartTotalPrice];
    }
}

function createCartItem(product) {
    let cartArticle = document.createElement('article');
    cartArticle.classList.add('cart__item');
    cartArticle.setAttribute('data-id', ''+[product._id]+'');
    cartArticle.setAttribute('data-color', ''+[product.color]+'');
    cartList.appendChild(cartArticle);

    let cartDivImg = document.createElement('div');
    cartDivImg.classList.add('cart__item__img');
    cartArticle.appendChild(cartDivImg);

    let cartImg = document.createElement('img');
    cartImg.setAttribute('src', ''+[product.imageUrl]+'');
    cartImg.setAttribute('alt', ''+[product.altTxt]+'');
    cartDivImg.appendChild(cartImg);

    let cartDivContent = document.createElement('div');
    cartDivContent.classList.add('cart__item__content');
    cartArticle.appendChild(cartDivContent);

    let cartContentDesc = document.createElement('div');
    cartContentDesc.classList.add('cart__item__content__description');
    cartDivContent.appendChild(cartContentDesc);

    let cartName = document.createElement('h2');
    cartName.innerHTML = [product.name];
    cartContentDesc.appendChild(cartName);

    let cartColor = document.createElement('p');
    cartColor.innerHTML = [product.color];
    cartContentDesc.appendChild(cartColor);

    let cartPrice = document.createElement('p');
    cartPrice.innerHTML = [product.price];
    cartContentDesc.appendChild(cartPrice);

    let cartContentSett = document.createElement('div');
    cartContentSett.classList.add('cart__item__content__settings');
    cartDivContent.appendChild(cartContentSett);

    let cartSettingsQty = document.createElement('div');
    cartSettingsQty.classList.add('cart__item__content__settings__quantity');
    cartContentSett.appendChild(cartSettingsQty);

    let cartQuantity = document.createElement('p');
    cartQuantity.innerHTML = 'Qté : ';
    cartSettingsQty.appendChild(cartQuantity);

    let cartQtyInput = document.createElement('input');
    cartQtyInput.classList.add('itemQuantity');
    cartQtyInput.setAttribute('type', 'number');
    cartQtyInput.setAttribute('name', 'itemQuantity');
    cartQtyInput.setAttribute('min', '1');
    cartQtyInput.setAttribute('max', '100');
    cartQtyInput.setAttribute('value', ''+[product.quantity]+'');
    cartSettingsQty.appendChild(cartQtyInput);
    cartQtyInput.addEventListener('change', function () {
        cartTotalQuantity -= parseInt(product.quantity);
        cartTotalPrice -= parseInt(product.price * product.quantity);
        let elementParent = cartQtyInput.closest('article');
        let Index = cartItems.findIndex(pro => pro._id == elementParent.dataset.id && pro.color == elementParent.dataset.color);
        let cartProduct = cartItems[Index];
        cartProduct.quantity = (cartQtyInput.value);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        cartTotalQuantity += parseInt(product.quantity);
        cartTotalPrice += parseInt(product.price * product.quantity);
        totalQuantity.innerHTML = [cartTotalQuantity];
        totalPrice.innerHTML = [cartTotalPrice];
    });

    let cartSettDelete = document.createElement('div');
    cartSettDelete.classList.add('cart__item__content__settings__delete');
    cartContentSett.appendChild(cartSettDelete);

    let cartDelete = document.createElement('p');
    cartDelete.classList.add('deleteItem');
    cartDelete.textContent = 'Delete';
    cartSettDelete.appendChild(cartDelete);
    cartDelete.addEventListener('click', function () {
        cartTotalQuantity -= parseInt(product.quantity);
        cartTotalPrice -= parseInt(product.price * product.quantity);
        totalQuantity.innerHTML = [cartTotalQuantity];
        totalPrice.innerHTML = [cartTotalPrice];
        let elementParent = cartDelete.closest('article');
        let Index = cartItems.findIndex(pro => pro._id == elementParent.dataset.id && pro.color == elementParent.dataset.color);
        let cartProduct = cartItems[Index];
        cartItems.splice(cartProduct, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        elementParent.remove();
    });
}

function validateStandard(input) {
    if (regexStandard.test(input)) {
        console.log("It works!");
        // add to options //
    } else {
        [input]Err = "Invalid, please try again.";
        validateStandard(input);
    }
}

function validateAddress(input) {
    if (regexAddress.test(input)) {
        console.log("Address works!");
        //add to options//
    } else {
        [input]Err = "Invalid, please try again.";
        validateAddress(input);
    }
}

function validateEmail(input) {
    if (regexEmail.test(input)) {
        console.log("Email works!");
        //add to options//
    } else {
        [input]Err = "Invalid, please try again.";
    }
}

validateStandard(inputFirstName);