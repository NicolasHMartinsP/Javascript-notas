// Exercícios: Arrays

//1. (Fácil) Pedidos Recentes: Receba o histórico de pedidos (do mais antigo ao mais novo) e retorne os n mais recentes, do mais novo ao mais antigo, sem alterar o histórico.

//2. (Fácil) Lista de Convidados: Remova os nomes repetidos de uma lista de convidados mantendo a ordem da primeira aparição.

//3. (Médio) Vale-Presente (LeetCode 1 - Two Sum): Dado um array de preços e o valor do vale, retorne os índices dos dois produtos que somam exatamente o valor, em uma única passada.

//4. (Médio) Escala de Plantão Rotativa (LeetCode 189): Gire a escala k posições para a direita (quem sai do fim volta para o começo), considerando que k pode ser maior que o tamanho, e retorne um array novo.

//5. (Médio) Juntando Rankings (LeetCode 88): Junte duas listas de pontuações já ordenadas em uma única lista ordenada, sem usar sort.

//6. (Difícil) Melhor Dia para Vender (LeetCode 121): Dado o preço de uma ação em cada dia, retorne o maior lucro possível comprando uma vez e vendendo depois. Se não houver lucro, retorne 0.

//7. (Difícil) Produção sem a Própria Fábrica (LeetCode 238): Para cada posição, retorne o produto de todos os outros números do array, sem usar divisão e em tempo linear.

//8. (Difícil) Melhor Sequência de Vendas (LeetCode 53 - Kadane): Encontre o período contínuo com a maior soma de saldos diários e retorne a soma e os índices de início e fim.

//9. (Difícil) Agenda de Salas (LeetCode 56): Receba reuniões [inicio, fim] fora de ordem e junte as que se sobrepõem ou se encostam, retornando os blocos de horário ocupados em ordem.

//10. (Difícil) Leitura em Espiral (LeetCode 54): Retorne os itens de uma matriz na ordem em espiral (direita, baixo, esquerda, cima, repetindo para dentro).
/*
Exercício: formulário de pessoas.
Ao enviar o formulário (nome, sobrenome, peso e altura), guarde cada
pessoa como objeto dentro de um array e mostre os dados na página.
(abrir o resolvidos.html no navegador)
*/
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
  //  form.onsubmit = function (evento) {
  //    evento.preventDefault();
  //    alert(1);
  //    console.log;
  //  };

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);
    resultado.innerHTML +=
      `<p>${nome.value},${sobrenome.value}, ` +
      `${peso.value},${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
