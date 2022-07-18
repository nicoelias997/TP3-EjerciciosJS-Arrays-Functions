// // 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let arraySuma = [];
let arraySuma2 = [];

do{
    let dado1 = Math.round(Math.random() * (6 - 1) + 1);
    let dado2 = Math.round(Math.random() * (6 - 1) + 1);
    let suma = dado1 + dado2
    arraySuma.push(suma);
} while(arraySuma.length < 50);

document.write("El array de 50 veces la suma de dos dados es: " + arraySuma + "<br><br>");


for(let y = 2; y <= 12; y++){
    arraySuma2.push(arraySuma.filter(n => n == y));
    }
    document.write("El array ordenado, donde nos muestra la cantidad de valores que hay de cada suma es: " + arraySuma2 + "<br><br>");
    

for(let x = 0; x <= 10; x++){ //tengo que hacer  que recorra 11 lugares, ya que son 11 los resultados posibles de la suma de los dados
    document.write("La frecuencia con la que ocurre " + (x+2) + " es: ");
    document.write(arraySuma2[x].length + "<br>") 
}   

