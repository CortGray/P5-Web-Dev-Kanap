fetch('http://localhost:3000/api/products')
.then(data => data.json())
.then(data => createItems(data));

const items = document.getElementById('items');

function createItems(array) {
  const length = array.length;
  for (let i in array){
    createItem(array[i]); 
  }
}

function createItem(product) {
  let productItem = document.createElement('a');
  productItem.setAttribute('href', './product.html?id='+[product._id]+'')
  items.appendChild(productItem);
  
  let productArticle = document.createElement('article');
  productItem.appendChild(productArticle);
  
  let productImage = document.createElement('img');
  productImage.setAttribute('src', ''+[product.imageUrl]+'');
  productImage.setAttribute('alt', ''+[product.altTxt]+'');
  productArticle.appendChild(productImage);
  
  let productName = document.createElement('h3');
  productName.innerHTML = [product.name];
  productName.classList.add('productName');
  productArticle.appendChild(productName);
  
  let productDetails = document.createElement('p');
  productDetails.innerHTML = [product.description];
  productDetails.classList.add('productDescription');
  productArticle.appendChild(productDetails);
}