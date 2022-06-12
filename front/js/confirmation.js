const confirmation = document.getElementById('orderId');

let orderId = sessionStorage.getItem('orderId');
confirmation.textContent = orderId;

localStorage.clear();
sessionStorage.clear();