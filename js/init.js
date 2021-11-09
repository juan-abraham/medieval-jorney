/* function showStyles() {
  // MUESTRA LOS ESTILOS DE CERVEZA DISPONIBLE y DEVUELVE POR CONSOLA LA INFORMACION DE ESA CERVEZA
  let beerStyle = prompt("Tenemos: Scotish-Honey-Porter-Pilsener-Seca");
  const findBeer = articulos.find((product) => product.style === beerStyle);
  console.log(findBeer);
} */

/* function showAlcohol() {
  // MUESTRA LOS GRADOS DE ALCOHOL DEPENIENDO DE CUANTAS CERVEZAS TOMES
  let beer = prompt("cuantas cervezas pensas tomar tomar?");
  for (let i = 0; i <= beer; i++) {
    alert(
      `Al tomar ${beer} cerveza/s, tendrás en sangre ${
        beer * 0.5
      } gramos de alcohol`
    );
  }
  if (beer > 2) {
    alert(
      "a partir de la 3er cerveza comenzaras a ponerte pesado, ten cuidado..."
    );
  } else {
    ("estas al limite de odiar el alcohol al despertar");
  }
}

articulos.sort(function (a, b) {
  if (a.style < b.style) {
    return -1;
  }
  if (a.style > b.style) {
    return 1;
  } else {
    return 0;
  }
}); */

// DESAFIO 7 - DEBERIA CREAR UN P Y PONER LA RECOMENDACIÓN

/* let tipOff = true;
function tipBeer() {
  let tip = document.getElementById("tip");

  if (tipOff) {
    tip.innerHTML = "Nuestra recomendación medieval es: Scotish";
    tipOff = false;
  } else {
    tip.innerHTML = "";
    tipOff = true;
  }
}
let tipOff2 = true;
function tipBeer2() {
  var c = document.querySelector("#tip2");
  if (tipOff2) {
    c.setAttribute("style", "display: block");
    tipOff2 = false;
  } else {
    c.setAttribute("style", "display: none");
    tipOff2 = true;
  }
} */

/* document.querySelector("img#profile").style.display = "none"; */
/* let tipOff3 = true;
function tipBeer3() {
  var d = document.querySelector("#tip3");
  if (tipOff3) {
    d.className = "inVisible";
    tipOff3 = false;
  } else {
    d.className = "visible";
    tipOff3 = true;
  }
} */

/* EJERCICIO  9  HACER UN EVENTO */
//*
//*
/* DEBERIA APRETAR EL BOTON Y EN UN P PONER EL RESULTADO DE LA FUNCION showAlcohol */

/* let showAlcoholForBeer = document.getElementById("alcoholBeer");
showAlcoholForBeer.addEventListener("click", showAlcohol);
 */
// AHORA USANDO EL INPUT Y DEVOLVIENDO RESULTADO EN UN TEXTO

/* let showAlcoholForPint = document.getElementById("alcoholBeer2");
showAlcoholForPint.addEventListener("click", showAlcoholForEachBeer);

function showAlcoholForEachBeer() {
  let howManyBeer = document.getElementById("beerCount").value;
  let countBeerApear = true;
  let tip = document.getElementById("tipBeerCount");

  if (countBeerApear) {
    tip.innerHTML = `Al tomar ${howManyBeer} cerveza/s, tendrás en sangre ${
      howManyBeer * 0.5
    } gramos de alcohol`;
    countBeerApear = false;
  } else {
    tip.innerHTML = "";
    countBeerApear = true; //NO SE ESTARIA DESAPARECIENDO
  }
} */
// EJERCICIO 9 PARTE DOS HTML ARRAY Y DOM

/* let showArray = "";
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
        <a href="#" class="btn btn-outline-dark">Comprar</a>
      </div>
    </div>
  </div>`;

  document.getElementById("spaceToArray").innerHTML = showArray;
}
 */

// INCORPORAR JQUERY AL PROYECTO
$("#showProduct").on("click", function () {
  $(".container").slideToggle(); // probe para sacar el catalogo solamente, con #cart, .product, solo me funciono con la clase container...
});

// INCORPORAR ANIMACIONES CONCATENADAS

// la idea es que al marcar que uno es menor, aparezca un parrafo y se quite el catalogo

function isOld() {
  var oldOrTeen = $("input[name=radio_button_age]:checked").val();

  if (oldOrTeen === false) {
    $(".container").hide();
    $("body").text("No puedes ver esta página siendo menor");
    console.log("prueba ");
  }
}
isOld();
// No hay errores en consola, lo que intenté hacer fue crear unafunciión que al detectar que esta puesto en "no"
// que tiene valor false, haga que la clase container desaparezca y aparezca en body el texto puesto
// puse en consola prueba, pero no aparece al marcar
