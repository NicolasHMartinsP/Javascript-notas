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
