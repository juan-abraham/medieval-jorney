//Array con productos
const articulos = [
  {
    id: 1,
    product: "Cerveza",
    style: "Scotish",
    cost: 100,
    img: "img/scotish-etiqueta.jpg",
  },
  {
    id: 2,
    product: "Cerveza",
    style: "Coffee",
    cost: 100,
    img: "img/coffee.jpg",
  },
  {
    id: 3,
    product: "Cerveza",
    style: "Blonde",
    cost: 100,
    img: "img/blonde-etiqueta.jpg",
  },
  {
    id: 4,
    product: "Hidromiel",
    style: "Seca",
    cost: 120,
    img: "img/hidromiel-etiqueta.jpg",
  },
];

//Funcion que muestra el catálogo en la pagina
let showArray = "";
for (let i = 0; i < articulos.length; i++) {
  let beer = articulos[i];

  showArray += `<div class="col">
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
         <button id="${beer.id}" class="btn btn-danger buybtn">Comprar</button>
      </div>
    </div>
  </div>`;

  document.getElementById("spaceToArray").innerHTML = showArray;
}
