// Arreglo de números
let numeros = [1, 2, 3, 4, 5];

// Duplicar cada número del arreglo usando map
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);

// Filtrar los números impares del arreglo usando filter
let impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares);

// Sumar todos los números del arreglo usando reduce
let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumaTotal);

// Arreglo de palabras
let palabras = ["Hola", "Mundo", "JavaScript", "Flechas"];

// Convertir cada palabra a minúsculas usando map
let minusculas = palabras.map(palabra => palabra.toLowerCase());
console.log(minusculas);

// Filtrar las palabras que contienen más de 5 caracteres usando filter
let largas = palabras.filter(palabra => palabra.length > 5);
console.log(largas);

// Unir todas las palabras en una cadena usando reduce
let union = palabras.reduce((acumulador, palabra) => acumulador + " " + palabra, "");
console.log(union);