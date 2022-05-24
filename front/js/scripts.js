const items = document.getElementById(items);

fetch('http://localhost:3000/api/products')
.then(data => data.json())
.then(data => createItems(data));

function createItems(array) {
  const length = array.length;
  for (let i in array){
    createItem(array[i]); 
  }
}

function createItem(product) {
  let productItem = document.createElement('a');
  productItem.innerHTML = '<a href="./product.html?id='+[product.id]+'">';
  items.appendChild(productItem);
  let productArticle = document.createElement('article');
  productItem.appendChild(productArticle);
  let productImage = document.createElement('img');
  productImage.innerHTML = '<img src="'+[product.imageUrl]+'" alt="'+[product.altTxt]+'">';
  productArticle.appendChild(productImage);
  let productName = document.createElement('h3');
  productName.innerHTML = '<h3 class="productName">'+[product.name]+'</h3>';
  productArticle.appendChild(productName);
  let productDetails = document.createElement('p');
  productDetails.innerHTML = '<p class="productDescription">'+[product.description]+'</p>'
  productArticle.appendChild(productDetails);
}