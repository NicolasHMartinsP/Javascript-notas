// ===== Arrays =====
//arrays
const array = [1, 2, 4, 5];
console.log(array[0], array.length); // 1 4 -> índice começa em 0
console.log(array.at(-1)); // 5 -> último

// Adicionar e remover (alteram o array)
const fila = ["Ana", "Bia"];
fila.push("Caio"); // no fim
fila.unshift("Duda"); // no começo
fila.pop(); // remove do fim
fila.shift(); // remove do começo
fila.splice(1, 1); // remove 1 item a partir do índice 1
console.log(fila); // ["Ana"]

// Copiar e recortar (não alteram o original)
const numeros = [10, 20, 30, 40];
console.log(numeros.slice(1, 3)); // [20, 30]
const copia = [...numeros, 50]; // spread: copia e junta
const [primeiro, ...resto] = numeros; // desestruturação
console.log(primeiro, resto);

// Procurar
console.log(numeros.includes(20), numeros.indexOf(30)); // true 2
console.log(numeros.find((n) => n > 15)); // 20 -> primeiro que passa no teste

// Percorrer
numeros.forEach((n, i) => console.log(i, n));

// map, filter, reduce (devolvem algo novo)
const dobros = numeros.map((n) => n * 2); // transforma cada item
const grandes = numeros.filter((n) => n > 20); // mantém os que passam
const total = numeros.reduce((acumulador, n) => acumulador + n, 0); // vira um valor só
console.log(dobros, grandes, total);

// Ordenar: sem comparador ordena como texto
console.log([10, 1, 5].sort((a, b) => a - b)); // [1, 5, 10]

// Converter
console.log("1,2,3".split(",").map(Number)); // [1, 2, 3]
console.log([...new Set([1, 1, 2])]); // [1, 2] -> remove repetidos

// Matriz: array de arrays
const tabuleiro = [
  ["X", "O"],
  ["O", "X"],
];
console.log(tabuleiro[1][0]); // "O"
