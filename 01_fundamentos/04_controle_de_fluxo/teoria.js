// ===== Condicionais =====
const hora = 14;
if (hora <= 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde"); // roda o primeiro que for true e pula o resto
} else {
  console.log("Boa noite");
}

// Ternário: if/else de uma linha que devolve valor
const saldo = -50;
const situacao = saldo >= 0 ? "positivo" : "negativo";
console.log(situacao);

// switch: vários casos para um mesmo valor
const dia = 6;
switch (dia) {
  case 0:
  case 6:
    console.log("fim de semana");
    break; // sem break ele continua nos cases de baixo
  default:
    console.log("dia útil");
}

// ===== Laços =====
// for: quando sabe quantas vezes repetir
for (let i = 1; i <= 3; i++) {
  console.log("volta", i);
}

// while: repete enquanto a condição for true
let numero = 1;
while (numero < 100) numero *= 2;
console.log(numero); // 128

// do...while: roda pelo menos uma vez
let tentativas = 0;
do {
  tentativas++;
} while (tentativas < 3);

// for...of: valores de array/string | for...in: chaves de objeto
for (const fruta of ["maçã", "uva"]) console.log(fruta);
for (const chave in { nome: "Nico", idade: 19 }) console.log(chave);

// break sai do laço | continue pula para a próxima volta
for (const n of [3, -1, 5, 12]) {
  if (n < 0) continue;
  if (n > 10) break;
  console.log(n); // 3 5
}

// Acumulador: variável fora do laço que vai somando
let soma = 0;
for (let i = 1; i <= 100; i++) soma += i;
console.log(soma); // 5050
