/*
Exercício: com nome, idade, peso e altura,
calcule o IMC e o ano de nascimento e exiba tudo
em uma única frase usando template strings.
*/
const nomi = "Nico";
const idade = "19";
const peso = "79";
const altura = "1.70";
let imc = peso / (altura * altura);
console.log(imc);
const ano = 2026;
let anoNascimento = ano - idade;
console.log(anoNascimento);
//template strings
console.log(
  `${nomi} tem ${altura} de altura, tem ${idade} anos e pesa ${peso} kg seu imc é de ${imc}, nasceu no ano de ${anoNascimento}`,
);
