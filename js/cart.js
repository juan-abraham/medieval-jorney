/* CONSTANTES PARA IR UTILIZNDO A LO LARGO DEL CARRO */
const cartArray = [];
const arrayProduct = [];

/* FUNCIONES PARA EL CARRITO */

/* Agregar al carrito */
function addCart(id) {
  const product = articulos.find((item) => item.id == id); // puse ahora 'articulos' en vez de el array vacio, pero noestoy seguro que funcione
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
          <button id="${beer.id}" class="btn btn-primary buy">Comprar</button>
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
