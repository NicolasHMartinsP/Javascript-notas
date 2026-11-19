// ===== Variáveis e tipos =====

// const -> não pode ser reatribuída (use por padrão)
// let   -> pode ser reatribuída, mas não redeclarada no mesmo escopo
// var   -> forma antiga, pode ser redeclarada (evitar)

//var x let
var nome = "nico";
var nome = "tico"; // é redeclaravel
let comida = "pipoca"; //não é redeclaravel
console.log(nome);

let pontos = 0;
pontos = 10; // let aceita novo valor

//template strings
const nomi = "Nico";
const idade = "19";
console.log(`${nomi} tem ${idade} anos`);
console.log(`Ano que vem: ${Number(idade) + 1}`); // dentro de ${} cabe conta

// ===== Tipos primitivos =====
//string
const anima = "jacaré";
const num21 = 100; //number
let nomeanimal; //undefined
let sobrenomeAluno = null; //Nulo
const aprovado = false; //boolean = true, false (lógico)

// typeof mostra o tipo do valor
console.log(typeof anima, typeof num21, typeof nomeanimal, typeof aprovado);
console.log(typeof null); // "object" -> erro antigo do JS
console.log(Array.isArray([1, 2])); // jeito certo de checar array

//imutaveis - string, number, boolean, undefined,
//null (bigint,symbol)

// ===== Conversão =====
console.log(Number("42"), String(42), Boolean(0)); // 42 "42" false
console.log("5" + 2); // "52" -> + com string junta
console.log("5" - 2); // 3    -> - converte para número
// falsy: false, 0, "", null, undefined, NaN (o resto é truthy)

// ===== Valor x referência =====
let x = 10;
let y = x; // primitivo: copia o valor
y = 20;
console.log(x, y); // 10 20

// Arrays (e objetos) são passados por referência:
// b aponta para o mesmo array que a
const a = [1, 2];
const b = a;
b.push(3);
console.log(a, b); // os dois mudaram
const c = [...a]; // spread cria uma cópia de verdade
