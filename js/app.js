//Array con productos
const articulos = [
  {
    id: 1,
    product: "Cerveza",
    style: "Scotish",
    cost: 100,
    img: "../img/etiquetas/scotish-etiqueta.jpg",
    quantity: 0,
  },
  {
    id: 2,
    product: "Cerveza",
    style: "Coffee",
    cost: 100,
    img: "../img/etiquetas/coffee.jpg",
    quantity: 0,
  },
  {
    id: 3,
    product: "Cerveza",
    style: "Blonde",
    cost: 100,
    img: "../img/etiquetas/blonde-etiqueta.jpg",
    quantity: 0,
  },
  {
    id: 4,
    product: "Hidromiel",
    style: "Seca",
    cost: 120,
    img: "../img/etiquetas/hidromiel-etiqueta.jpg",
    quantity: 0,
  },
];

//Funcion que muestra el catálogo en la pagina
let showArray = "";
for (let i = 0; i < articulos.length; i++) {
  let beer = articulos[i];

  showArray += `<div class="col">
    <div class="card">
      <div class="card-header">
      <img src=${beer.img} class="imgModal"/>
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
          <span> 
          Cantidad: 
          <input type="number" id="
          ${beer.style} 
      " value="${beer.quantity}" min = 1 onchange="addCart(${beer.id})">                  
</span>
         <button id="${beer.id}" class="btn btn-danger buybtn" onclick="addCart(${beer.id})">Comprar</button>
      </div>
    </div>
  </div>`;

  document.getElementById("spaceToArray").innerHTML = showArray;
}
