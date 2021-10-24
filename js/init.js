const articulos = [{ id: 1,  product: "Cerveza", style: "Scotish", cost: 100, img: "img/scotish-etiqueta.jpg" },
                  {  id: 2,  product: "Cerveza", style: "Coffee", cost: 100, img: "img/coffee.jpg" },
                  {  id: 3,  product: "Cerveza" , style: "Blonde", cost: 100, img: "img/blonde-etiqueta.jpg" },
                  {  id: 4,  product: "Hidromiel", style: "Seca", cost: 120, img: "img/hidromiel-etiqueta.jpg" }, 
                ];

function showStyles() { // MUESTRA LOS ESTILOS DE CERVEZA DISPONIBLE y DEVUELVE POR CONSOLA LA INFORMACION DE ESA CERVEZA 
    let beerStyle = prompt('Tenemos: Scotish-Honey-Porter-Pilsener-Seca');
    const findBeer = articulos.find(product => product.style === beerStyle); 
console.log(findBeer); 
} 

function showAlcohol() { // MUESTRA LOS GRADOS DE ALCOHOL DEPENIENDO DE CUANTAS CERVEZAS TOMES
    let beer = prompt("cuantas cervezas pensas tomar tomar?");
for (let i = 0; i <= beer; i++)  {  
    alert(`Al tomar ${i} cerveza/s, tendrás en sangre ${i*0.5} gramos de alcohol`);
}
if (beer > 2) {
    alert("a partir de la 3er cerveza comenzaras a ponerte pesado, ten cuidado...");
} else { "estas al limite de odiar el alcohol al despertar" };
};


articulos.sort(function(a, b) {
    if (a.style < b.style) {
        return -1;
    } if (a.style > b.style) {
        return 1;
    } else {
        return 0
} });  

// DESAFIO 7 - DEBERIA CREAR UN P Y PONER LA RECOMENDACIÓN 
function tipBeer() {

let tipOff = true;
let tip = document.createElement("p");

if (tipOff) {  
    tip.innerHTML = "Nuestra recomendación medieval es: Scotish";
    tipOff = false;
} else {
    tip.parentNode.removeChild(tip);
    tipOff = true;
}


    
}








