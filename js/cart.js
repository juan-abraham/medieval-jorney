/* CONSTANTES PARA IR UTILIZNDO A LO LARGO DEL CARRO */
const cartArray = [];

/* FUNCIONES PARA EL CARRITO */

/* Agregar al carrito */
function addCart(id) {
  const product = articulos.find((item) => item.id == id);
  const storageArray = JSON.parse(localStorage.getItem("cart")) || [];
  const indexProduct = storageArray.findIndex((e) => e.id == id);
  let input = document.getElementById(product.style).value;

  storageArray.splice(indexProduct, 1);
  product.quantity = input;
  storageArray.push(product);

  localStorage.setItem("cart", JSON.stringify(storageArray));
}

/* Borrar del carrito  */
function cleanCart(id) {
  const product = JSON.parse(localStorage.getItem("cart"));
  const indexProduct = product.findIndex((e) => e.id == id);
  if (indexProduct >= 0) {
    product[indexProduct].quantity = 0;
    product.splice(indexProduct, 1);
    localStorage.setItem("cart", JSON.stringify(product));
    showTotal();
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
      <div class="row">
        <p class="card-text">
        Disfruta ${beer.quantity} excelente 
        ${beer.product} 
    
        a un precio de $ 
        ${beer.cost * beer.quantity}
          </p>
          
      </div>

          <button id="${
            beer.id
          }" class="btn btn-primary clean-btn">Cancelar</button>
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
  showTotal();
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
// ACTUALIZAR EL PRECIO TOTAL

function showTotal() {
  let total = 0;
  const storageArray = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < storageArray.length; i++) {
    const element = storageArray[i];
    total += element.quantity * element.cost;
  }

  console.log(total);
  document.getElementById("totalPrice").innerHTML = `<p> ${total} <p>`;
}
showTotal();

/* Calcular el sub total */

function update(id) {
  const product = articulos.find((item) => item.id == id);
  const storageArray = JSON.parse(localStorage.getItem("cart")) || [];
  const indexProduct = storageArray.findIndex((e) => e.id == id);
  quantity = document.getElementById(id * id).value;
  product.quantity = quantity;
  storageArray.splice(indexProduct, 1);
  storageArray.push(product);
  localStorage.setItem("cart", JSON.stringify(storageArray));

  showCart();
}
