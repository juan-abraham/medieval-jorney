//Array con productos
const articulos = [
  {
    id: 1,
    product: "Beer",
    style: "Scotish",
    cost: 120,
    img: "../img/etiquetas/scotish-etiqueta.jpg",
    quantity: 0,
  },
  {
    id: 2,
    product: "Beer",
    style: "Blonde",
    cost: 100,
    img: "../img/etiquetas/blonde-etiqueta.jpg",
    quantity: 0,
  },
  {
    id: 3,
    product: "Beer",
    style: "Pilsener",
    cost: 130,
    img: "../img/etiquetas/etiqueta-unica.png",
    quantity: 0,
  },
];

//Funcion que muestra el catálogo en la pagina
let showArray = "";
for (let i = 0; i < articulos.length; i++) {
  let beer = articulos[i];

  showArray += `
  <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="${beer.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> Enjoy a 
        ${beer.style} by $ ${beer.cost}</h5>
         <span> Quantity: 
        <input type="number" id="
        ${beer.style} 
    " value="${beer.quantity}" min = 1 onchange="addCart(${beer.id})" class="inputBeer"></span>
      </div>
     
      <button id="${beer.id}" class="btn btn-danger buybtn" onclick="addCart(${beer.id})">Buy</button>
    </div>
  </div>
  </div>
  
  `;

  /* `<div class="col">
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
         <button id="${beer.id}" class="btn btn-danger buybtn" onclick="addCart(${beer.id})">Buy</button>
      </div>
    </div>
  </div>` */

  document.getElementById("spaceToArray").innerHTML = showArray;
}
