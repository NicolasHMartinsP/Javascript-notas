// ===== Funções =====
//funções
function saudacao(name) {
  return `Bom dia ${name}!`;
}
const variavel = saudacao("nico");
console.log(variavel);

function soma(x, y) {
  const resultado = x * y; // obs.: o nome diz soma, mas multiplica
  return resultado;
}
console.log(soma(2, 100));

// Sem return a função devolve undefined
// O return encerra a função na hora

// Parâmetro padrão e rest
function cumprimentar(nome = "visitante") {
  return `Olá, ${nome}!`;
}
console.log(cumprimentar()); // "Olá, visitante!"

function somarTodos(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log(somarTodos(1, 2, 3)); // 6

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

// Escopo: o que nasce dentro da função só existe dentro dela

// Função que cria objeto (factory)
//functions
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Marquin", "da silva", 100);
console.log(pessoa1.nome);

// Callback: função passada como argumento
function calcular(a, b, operacao) {
  return operacao(a, b);
}
console.log(calcular(10, 5, (a, b) => a - b)); // 5

// Closure: a função lembra das variáveis de onde foi criada
function criarContador() {
  let total = 0;
  return () => ++total;
}
const contar = criarContador();
contar();
console.log(contar()); // 2

// Recursão: a função chama ela mesma (precisa de um caso para parar)
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(4)); // 24
