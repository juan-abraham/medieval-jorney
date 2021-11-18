/* CONSTANTES PARA IR UTILIZNDO A LO LARGO DEL CARRO */
const cartArray = [];

/* FUNCIONES PARA EL CARRITO */

/* Agregar al carrito */
function addCart(id) {
  const product = articulos.find((item) => item.id == id); 
  const storageArray = JSON.parse(localStorage.getItem("cart")) || [];
  storageArray.push(product);
  localStorage.setItem("cart", JSON.stringify(storageArray));
}

/* Borrar del carrito  */
function cleanCart(id) {
  const product = JSON.parse(localStorage.getItem("cart"));
  const indexProduct = product.findIndex((e) => e.id == id);
  if (indexProduct >= 0) {
    product.splice(indexProduct, 1);
    localStorage.setItem("cart", JSON.stringify(product));
    return `producto con id ${id} borrado del carrito`;
  } else {
    return "Error al borrar, no coincide el id";
  }
}

/* MOSTRAR EN PANTALLA */

const showHtmlProduct = document.getElementById("cart");

function showCart() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  console.log("entraste al carrito");
  let itemCart = "";
  for (let beer of cartFromStorage) {
    itemCart += `
        <div class="col product">
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
          <button id="${beer.id}" class="btn btn-primary clean-btn">Cancelar</button>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("cart").innerHTML = itemCart;

  const cartClean = document.getElementsByClassName("clean-btn");

  for (const btn of cartClean) {
    btn.addEventListener("click", (event) => {
      const idProduct = event.target.id;
      cleanCart(idProduct);
      showCart();
    });
  }
}

/* Para que el carrito este cargado siempre en el MODAL */

const showCartModal = JSON.parse(localStorage.getItem("cart"));

if (showCartModal) {
  showCart();
}
/* GUARDAR LA COMPRA EN STORAGE  */

const btnBuy = document.getElementsByClassName("buybtn");

for (const btn of btnBuy) {
  btn.addEventListener("click", (event) => {
    const idProd = event.target.id;
    console.log("agregaste producto con id", idProd);
    addCart(idProd);
    showCart();
  });
}
