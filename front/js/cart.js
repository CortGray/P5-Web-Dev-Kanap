const cartList = document.getElementById('cart__items');
let cartItems = JSON.parse(localStorage.getItem('cart'));
let cartTotal = 0;

function createCartItem(product) {
    let cartArticle = document.createElement('article');
    cartArticle.classList.add('cart__item');
    cartArticle.setAttribute('data-id', ''+[cartItemId]+'');
    cartArticle.setAttribute('data-color', ''+[cartItemColor]+'');
    cartList.appendChild(cartArticle);

    let cartDivImg = document.createElement('div');
    cartDivImg.classList.add('cart__item__img');
    cartArticle.appendChild(cartDivImg);

    let cartImg = document.createElement('img');
    cartImg.setAttribute('src', ''+[cartItemImg]+'');
    cartImg.setAttribute('alt', ''+[cartItemAlt]+'');
    cartDivImg.appendChild(cartImg);

    let cartDivContent = document.createElement('div');
    cartDivContent.classList.add('cart__item__content');
    cartArticle.appendChild(cartDivContent);

    let cartContentDesc = document.createElement('div');
    cartContentDesc.classList.add('cart__item__content__description');
    cartDivContent.appendChild(cartContentDesc);

    let cartName = document.createElement('h2');
    cartName.innerHTML = [cartItemName];
    cartContentDesc.appendChild(cartName);

    let cartColor = document.createElement('p');
    cartColor.innerHTML = [cartItemColor];
    cartContentDesc.appendChild(cartColor);

    let cartPrice = document.createElement('p');
    cartPrice.innerHTML = [cartItemPrice];
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
    cartQtyInput.setAttribute('value', ''+[cartItemQuantity]+'');
    cartSettingsQty.appendChild(cartQtyInput);

    let cartSettDelete = document.createElement('div');
    cartSettDelete.classList.add('cart__item__content__settings__delete');
    cartContentSett.appendChild(cartSettDelete);

    let cartDelete = document.createElement('p');
    cartDelete.classList.add('deleteItem');
    cartDelete.textContent = 'Delete';
    cartSettDelete.appendChild(cartDelete);
}