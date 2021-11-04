/* CONSTANTES PARA IR UTILIZNDO A LO LARGO DEL CARRO */

const arrayProduct = [];
const cartArray = [];

/* FUNCIONES PARA EL CARRITO */

/* Agregar al carrito */
function addCart(id) {
  const product = arrayProduct.find((item) => item.id == id);
  const storageArray = JSON.parse(localStorage.getItem("cart")) || [];
  storageArray.push(product);
  localStorage.setItem("cart", JSON.stringify(storageArray));
}

/* Borrar del carrito  */

/* MOSTRAR EN PANTALLA */

const showHtmlProduct = document.getElementById("cart");

function showCart() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  console.log("entraste al carrito");
  let itemCart = "";
  for (let beer of cartFromStorage) {
    itemCart += `
        <div class="col">
    <div class="card">
      <div class="card-header">
        <h1>
    ${beer.style}</h1> 
      </div>
      <div class="card-body">
        <p class="card-text">
        Disfruta una excelente 
        ${beer.product} 
    
        a un precio de $ 
        ${beer.cost}
          </p>
        <a href="#" class="btn btn-outline-dark buy">Comprar</a>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("cart").innerHTML = itemCart;
}

/* GUARDAR LA COMPRA EN STORAGE  */

const btnBuy = document.getElementsByClassName("buy");

for (const btn of btnBuy) {
  btn.addEventListener("click", (event) => {
    const idProd = event.target.id;
    console.log("agregaste producto con id", idProd);
    addCart(idProd);
    showCart();
  });
}
