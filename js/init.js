const articulos = [{ id: 1,  producto: "Cerveza", tipo: "Scotish", precio: 100 },
                  {  id: 2,  producto: "Cerveza", tipo: "Honey", precio: 100 },
                  {  id: 3,  producto: "Cerveza" , tipo: "Porter", precio: 100 },
                  {  id: 4,  producto: "Cerveza", tipo: "Pilsener", precio: 100 },
                  {  id: 5,  producto: "Hidromiel", tipo: "Seca", precio: 120 },
                ];

//let gustos = prompt('Tenemos: Scotish-Honey-Porter-Pilsener-Seca');

//const tipoBirra = articulos.find(producto => producto.tipo === gustos); 
//console.log(tipoBirra);
 
articulos.sort(function(a, b) {
    if (a.tipo < b.tipo) {
        return -1;
    } if (a.tipo > b.tipo) {
        return 1;
    } else {
        return 0
} });  









