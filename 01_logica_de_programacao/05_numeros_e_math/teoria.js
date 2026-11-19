// ===== Numbers e o objeto Math =====
let num1 = 9.124;
console.log(num1 ** 0.5); // raiz quadrada
//let num2 = Math.floor(num1); // arredonda para baixo
//let num2 = Math.ceil(num1); // arredonda para cima
//let num2 = Math.round(num1); // arredonda para o mais próximo

// número aleatório entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.pow(2, 10));
//const numero = prompt("Digite um número: ");
//const numerinho = document.getElementById("numero-titulo");
//const texto = document.getElementByid("textin");

//numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>O dobro do numero digitado é  ${numero * 2} </p>`;
//funções
function saudacao(name) {
  return `Bom dia ${name}!`;
}
const variavel = saudacao("nico");
console.log(variavel);
function soma(x, y) {
  const resultado = x * y;
  return resultado;
}
console.log(soma(2, 100));
// função anonima (dentro de uma variavel)
const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(113));
//arrow function
const raizq = (n) => n ** 0.5; // faz a mesma coisa que a outra função mas mais simples
console.log(raizq(9));
console.log(raizq(16));
console.log(raizq(25));
