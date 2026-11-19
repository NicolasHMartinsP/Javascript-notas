// ===== Variáveis e template strings =====

// const -> não pode ser reatribuída
// let   -> pode ser reatribuída, mas não redeclarada no mesmo escopo
// var   -> forma antiga, pode ser redeclarada (evitar)

//var x let
var nome = "nico";
var nome = "tico"; // é redeclaravel
let comida = "pipoca"; //não é redeclaravel
console.log(nome);

//template strings
const nomi = "Nico";
const idade = "19";
console.log(`${nomi} tem ${idade} anos`);

//arrays
const array = [1, 2, 4, 5];
//objetos
const pessoa01 = {
  idade: 25,
  nome: "niquin",
  sobrenome: "inacio lula",
};
console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);

//functions
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Marquin", "da silva", 100);
console.log(pessoa1.nome);

const pessoal = {
  nome: "picotico",
  sobrenome: "wanna be the guy",
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`);
  },

  aumentaIdade() {
    this.idade++;
  },
};

pessoal.fala();
pessoal.aumentaIdade();
pessoal.fala();
