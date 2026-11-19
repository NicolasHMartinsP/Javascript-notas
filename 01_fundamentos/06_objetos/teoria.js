// ===== Objetos =====
//objetos
const pessoa01 = {
  idade: 25,
  nome: "niquin",
  sobrenome: "inacio lula",
};
console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);
console.log(pessoa01["idade"]); // colchetes: útil quando a chave está numa variável

// Alterar, adicionar e remover
pessoa01.idade = 26;
pessoa01.cidade = "Curitiba";
delete pessoa01.cidade;
console.log("nome" in pessoa01); // true -> a chave existe?

// Métodos e this (this = o objeto que chamou o método)
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

// Percorrer
const estoque = { cafe: 12, pao: 0 };
console.log(Object.keys(estoque)); // ["cafe", "pao"]
console.log(Object.values(estoque)); // [12, 0]
for (const [produto, qtd] of Object.entries(estoque)) console.log(produto, qtd);

// Desestruturação
const { nome, idade } = pessoal;
console.log(nome, idade);

// Spread: copiar e juntar (a última chave vence)
const padrao = { tema: "claro", fonte: 14 };
const final = { ...padrao, fonte: 18 };
console.log(final);

// Objetos são comparados por referência
console.log({ a: 1 } === { a: 1 }); // false

// ?. evita erro quando algo no caminho não existe
const pedido = { cliente: { nome: "Ana" } };
console.log(pedido.entrega?.cep ?? "sem entrega");

// JSON: objeto <-> texto
const texto = JSON.stringify(pedido);
console.log(JSON.parse(texto).cliente.nome);
