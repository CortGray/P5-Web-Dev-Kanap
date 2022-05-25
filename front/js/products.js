const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get('id');

fetch('http://localhost:3000/api/products/'+ pageId)
.then(data => data.json())
.then(data => addItem(data));

function addItem(product) {
    let imgDiv = document.getElementsByClassName('item__img');
    let productImg = document.createElement('img');
    productImg.setAttribute('src', ''+[product.imageUrl]+'');
    productImg.setAttribute('alt', ''+[product.altTxt]+'');
    imgDiv.appendChild(productImg);

    let productTitle = document.getElementById('title');
    productTitle.textContent = product.name;

    let productPrice = document.getElementById('price');
    productPrice.textContent = product.price;

    let productDescription = document.getElementById('description');
    productDescription.textContent = product.description;

    let productColorOptions = document.getElementById('colors');
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