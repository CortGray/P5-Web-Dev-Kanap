const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get('id');

fetch('http://localhost:3000/api/products/'+ pageId)
.then(data => data.json())
.then(data => addItem(data));

const imgDiv = document.getElementsByClassName('item__img')[0];
const productTitle = document.getElementById('title');
const productPrice = document.getElementById('price');
const productDescription = document.getElementById('description');
const productColorOptions = document.getElementById('colors');
const cartButton = document.getElementById('addToCart');
const optionColor = document.getElementById('colors');
const optionQuantity = document.getElementById('quantity');

let productArray = [];
productArray = JSON.parse(localStorage.getItem('cart')) || [];

function addItem(product) {
    let productImg = document.createElement('img');
    productImg.setAttribute('src', ''+[product.imageUrl]+'');
    productImg.setAttribute('alt', ''+[product.altTxt]+'');
    imgDiv.appendChild(productImg);
    productTitle.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
    colorOptions(product.colors);
}

function colorOptions(colors) {
    for (color of colors) {
        let colorOpt = document.createElement('option');
        colorOpt.setAttribute('value', ''+[color]+'');
        colorOpt.textContent = color;
        productColorOptions.appendChild(colorOpt);
    }
}

cartButton.addEventListener('click', () => {
    addToCart(pageId);
})

function addToCart(item) {
    if (productArray.includes([pageId]) && productArray.includes([optionColor.value])) {
        let i = productArray.indexOf([pageId]) && productArray.indexOf([optionColor.value]);
        [i].quantity = +[optionQuantity.value];
    } else {
        productArray.push({id: pageId, color: optionColor.value, quantity: optionQuantity.value});
        localStorage.setItem('cart', JSON.stringify(productArray));
    }
}