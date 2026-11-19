// ===== Operadores aritméticos =====
//+ adição
//- Subtração
//* multiplicação
//** potenciação
//% Resto da divisão
// /divisão
let num1 = 1;
let num2 = 2.5;
console.log(num1 + num2);
console.log(typeof num1);
console.log(10 % 3); // 1
console.log(2 + 3 * 4); // 14 -> ( ) depois ** depois * / % depois + -

/*
Incremento ++
Decremento --
*/
let contador = 0;
contador++; // 1
contador += 5; // 6 (também existe -=, *=, /=)

// ===== Comparação (resultado é sempre boolean) =====
/*
>
>=
<
<=
==   igual só no valor (evitar)
===  igual no valor e no tipo (usar)
!=
!==
*/
console.log(10 > 5);
console.log(10 == "10", 10 === "10"); // true false

//operadores lógicos
//&& and E   -> os dois precisam ser true
//|| OR OU   -> basta um ser true
//! NOT não  -> inverte
console.log(true && false, true || false, !true);
console.log(0 || "padrão"); // "padrão" -> || pega o primeiro valor truthy
console.log(0 ?? "padrão"); // 0 -> ?? só troca null/undefined

// ===== Numbers e o objeto Math =====
let numMath = 9.124;
console.log(numMath ** 0.5); // raiz quadrada
console.log(Math.floor(numMath)); // 9  arredonda para baixo
console.log(Math.ceil(numMath)); // 10 arredonda para cima
console.log(Math.round(numMath)); // 9  arredonda para o mais próximo
console.log(Math.max(3, 9, 1), Math.min(3, 9, 1), Math.abs(-7));
console.log(Math.pow(2, 10));
console.log(numMath.toFixed(2)); // "9.12" (vira string)

// número aleatório entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(0.1 + 0.2); // 0.30000000000000004 -> decimal não é exato no computador
