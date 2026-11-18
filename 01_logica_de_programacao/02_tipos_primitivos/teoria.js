// ===== Tipos primitivos =====

//string
const anima = "jacaré";
const num21 = 100; //number
let nomeanimal; //undefined
let sobrenomeAluno = null; //Nulo
const aprovado = false; //boolean = true, false (lógico)

// typeof mostra o tipo do valor
console.log(typeof anima, typeof num21, typeof nomeanimal, typeof aprovado);

// Arrays (e objetos) são passados por referência:
// b aponta para o mesmo array que a
const a = [1, 2];
const b = a;
console.log(a, b);
