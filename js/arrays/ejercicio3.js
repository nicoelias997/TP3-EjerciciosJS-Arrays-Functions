// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let arraySuma = [];
let arraySuma2 = [];

do{
    let dado1 = Math.round(Math.random() * (6 - 1) + 1);
    let dado2 = Math.round(Math.random() * (6 - 1) + 1);
    let suma = dado1 + dado2;
    arraySuma.push(suma);
    
} while(arraySuma.length < 50);

console.log(arraySuma);

for(let i = 2; i < 12; i++){
    arraySuma2.push(arraySuma.filter(numero => numero == i));
}
console.log(arraySuma2)


//no entiendo si me piden que anote en el array todas las sumas, o cuantas veces se repitio la misma suma



