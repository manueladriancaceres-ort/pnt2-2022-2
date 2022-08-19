console.log("sistema");

// Estilo programcion funcional
// Objetivos: no mutar o cambiar objetos
// Evitar uso de variables publicas

// imaginen que esta lista se pide al backend y tarda
// 20 segundos
const listaLibros = [
    { id: 2, nombre: "Mate", cantidad: 5},
    { id: 1, nombre: "Fisi", cantidad: 4},
    { id: 3, nombre: "Lite", cantidad: 10},
]

// no seria programacion funcional
//listaLibros.sort( (a,b) => a.cantidad - b.cantidad );
//console.log(listaLibros);
function ordenarListaLibros(listaLibros) {
    const copia = [...listaLibros];
    return copia.sort( (a,b) => a.nombre.localeCompare(b.nombre));
}

// es programacion funcional 
console.log(listaLibros);
console.log(ordenarListaLibros(listaLibros));


/*
// map
// pedido de un cliente, quiero la lista de nombres de libros
// de la lista de libros
const listaLibrosPorNombre = listaLibros.map(libro => libro.nombre);

// forma programacion imperativa
const rta = [];
for (let i = 0; i < listaLibros.length; i++) {
    rta.push(listaLibros[i].nombre);     
}
console.log(rta);
*/

//  Operador spread, clona otro objeto   {...}
/*
const lista = [...listaLibros];
lista.push({ id: 4, nombre: "Geo", cantidad: 5});

console.log(listaLibros);
console.log(lista);
*/

/*
listaLibros.forEach( libro => console.log(libro) );
listaLibros.forEach( libro => console.log(libro.nombre) );

console.log(listaLibros.reduce( (acu,libro) => acu + libro.cantidad, 0 ));

// reduce es una alternativa a este codigo
let acuCantidad = 0;
for (let i = 0; i < listaLibros.length; i++) {
    acuCantidad += listaLibros[i].cantidad;   
}
*/

/*
//
// funciones flecha  (arrow function)
// 
// funcion anonima
const suma = function() {
    return 500;
}
// arrow function
const sumaArrow = () => 500;
console.log(sumaArrow());

// ejemplo arrow function con parametros
const descuento = (importe, porcentaje) => importe * porcentaje;
console.log(descuento(1000,0.03));
// con una funcion comun:
function descuentoFu(importe,porcentaje) {
    return importe * porcentaje;
}
*/

// funciones de call back
/*
function fuAquien() {
    console.log("Saludar a alguien");
}
function saludar(fuAquien) {
    fuAquien();
}
saludar(fuAquien);
*/

// objetos
/*
const miObj = { codigo: 1, nombre: "carlos"};
console.log(miObj);
*/

// funcion
/*
function calcular() {
    let a = 100;
    let b = 200;
    return a + b;
}
console.log(calcular());
*/

// funcion anonima guardada en una constante
/*
const fuAnonima = function() {
    return 35;
}
console.log(fuAnonima());
*/


