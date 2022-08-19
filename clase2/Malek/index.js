console.log('Sistemasasasa');
//Objetos
/*
const miObj = {
    codigo: 1,
    nombre: "Maxi"
};

console.log(miObj);*/

//Funcion
/*
function calcular(params) {
    let a = 100;
    let b = 200;
    return a + b;
}

console.log(calcular());*/

//funciones anonimas guardada en una constante
/*

const funcionAnonima = function () {
    return 35;
};

console.log(funcionAnonima());*/



//Funciones de callback
/*
function funcionAQuien(params) {
    console.log("Saludar a alguien");
};

function saludar(callback) {
    callback()
};

saludar(funcionAQuien);*/


//Funciones flecha (arrow function)

/*const suma = function(params) {
    return 200;
}

const sumaArrow = () => {return 500};

console.log(sumaArrow());
console.log(suma());


const descuento = (importe,porcentaje) => importe * porcentaje;
console.log(descuento(100,0.8));*/

//esta funcion va a ser llamada con un metodo y dos numeros 
/*function hacerCuenta(callback,num1,num2){
    callback(num1,num2);
}

function suma (num1,num2){
   console.log(num1+num2);
}

function resta (num1,num2){
    console.log(num1-num2);
}

function division (num1,num2){
    console.log(num1/num2);
}
function mult (num1,num2){
    console.log(num1*num2);
}


hacerCuenta(suma,2,4);
hacerCuenta(resta,9,6);
hacerCuenta(mult,134,6);*/


//Estilo programación funcional.
//Objetivos: no mutar o cambiar objetos
const listaLibros = [
    {id:2, nombre: "Mate", cantidad: 5},
    {id:3, nombre: "Fis", cantidad: 4},
    {id:1, nombre: "Lit", cantidad: 8}
];

/*listaLibros.forEach(libro => console.log(libro));
listaLibros.forEach(libro => console.log(libro.nombre));

//Reduce es una alternativa para no realizar un for o foreach
console.log(listaLibros.reduce((acu,libro)=>acu + libro.cantidad,0));

const listaNombres = ["Sacha", "Maxi", "Seba", "Fede"]

listaNombres.forEach(element => console.log(element));


const listaLibritos = [
    {id:1, nombre: 'Matematica', cantidad: 5},
    {id:2, nombre: 'Fisica', cantidad: 4},
    {id:3, nombre: 'Literatura', cantidad: 10}
]
var sumaTotal = 0;
listaLibritos.forEach(libro => {
    console.log(libro);
    sumaTotal++;
    console.log(sumaTotal);
});*/

//Hacen referencia al mismo objeto, por ende le pushea tanto a lista2 como a listaLibros
/*const lista2 = listaLibros;
lista2.push({id:4, nombre: "Geo", cantidad: 10});

console.log(listaLibros);
console.log(lista2);*/

//Operador Spread, clona otro objeto tambien con {...}
/*const lista3 = [...listaLibros];
lista3.push({id:4, nombre: "Geo", cantidad: 10});

console.log(listaLibros);
console.log(lista3);


const listaLibrosPorNombre = listaLibros.map(libro => libro.nombre);
console.log(listaLibrosPorNombre);*/

// no seria programacion funcional,
//console.log(listaLibros.sort((a,b)=>a.id - b.id));

/*function ordenarListaLibros(listaLibros) {
    const copiaOrdenada = [...listaLibros]
    return copiaOrdenada.sort((a,b)=>a.id - b.id);
}*/
function ordenarListaLibros(listaLibros) {
    const copia = [...listaLibros];
    return copia.sort( (a,b) => a.nombre.localeCompare(b.nombre));
}

console.log(listaLibros);
console.log(ordenarListaLibros(listaLibros));