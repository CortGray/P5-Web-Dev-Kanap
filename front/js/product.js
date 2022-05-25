const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get('id');

fetch('http://localhost:3000/api/products/'+ pageId)
.then(data => data.json())
.then(data => addItem(data));

let imgDiv = document.getElementsByClassName('item__img')[0];
let productTitle = document.getElementById('title');
let productPrice = document.getElementById('price');
let productDescription = document.getElementById('description');
let productColorOptions = document.getElementById('colors');

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