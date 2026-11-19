// ===== DOM =====
// DOM é o HTML da página transformado em objetos que o JS consegue mexer.
// Abrir o index.html no navegador e ver o console (F12).

// Selecionar
const titulo = document.getElementById("numero-titulo"); // por id
const lista = document.querySelector("#lista-compras"); // primeiro que bate com o seletor CSS
const itens = document.querySelectorAll("li"); // todos
console.log(titulo, lista, itens.length);

// Conteúdo
titulo.textContent = "0"; // texto puro (seguro)
// innerHTML interpreta HTML: cuidado com texto digitado pelo usuário
const input = document.querySelector("#form-compra input");
console.log(input.value); // valor de input é sempre string

// Classes e atributos
lista.classList.add("ativa");
lista.classList.toggle("ativa"); // tira se tem, põe se não tem
console.log(lista.querySelector("li").dataset.id); // data-id="1" -> "1"

// Criar e remover
const li = document.createElement("li");
li.textContent = "Pão";
lista.append(li);
// li.remove();

// Eventos
const botaoNumero = document.getElementById("botao-numero");
botaoNumero.addEventListener("click", () => {
  const numero = Number(prompt("Digite um número: "));
  const numeroTitulo = document.getElementById("numero-titulo");
  const texto = document.getElementById("texto");

  numeroTitulo.innerHTML = numero;
  texto.innerHTML = `<p>O dobro do numero digitado é ${numero * 2}</p>`;
});

// submit: preventDefault impede a página de recarregar
document.getElementById("form-compra").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const novo = document.createElement("li");
  novo.textContent = input.value;
  lista.append(novo);
  input.value = "";
});

// Delegação: um listener no pai serve para todos os filhos (até os novos)
lista.addEventListener("click", (evento) => {
  const item = evento.target.closest("li");
  if (item) item.classList.toggle("concluida");
});
