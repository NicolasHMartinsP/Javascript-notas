// Exercícios: Strings

//1. (Fácil) Username Automático: Gere o username de um aluno no formato "nome.sobrenome", tudo minúsculo e sem espaços sobrando nas pontas.

//2. (Fácil) Cartão Mascarado no Checkout: Receba o número de um cartão (com ou sem espaços) e retorne "**** **** **** " seguido dos 4 últimos dígitos.

//3. (Médio) Títulos da Biblioteca: Formate um título com cada palavra começando em maiúscula, exceto as palavras de ligação (de, da, do, das, dos, e, a, o, em), que ficam minúsculas a não ser que sejam a primeira. Espaços repetidos viram um só.

//4. (Médio) Palíndromo de Verdade: Diga se uma frase é palíndromo ignorando maiúsculas, acentos, espaços e pontuação.

//5. (Médio) URL Amigável do Blog: Transforme o título de um post em slug: minúsculo, sem acentos, só letras, números e hífens, sem hífens repetidos nem nas pontas.

//6. (Difícil) Compressão de Logs (LeetCode 443): Comprima sequências de letras iguais trocando-as pela letra e a quantidade (sem número quando for 1). Se o resultado não ficar menor que o original, retorne o original.

//7. (Difícil) Agrupar Anagramas (LeetCode 49): Receba uma lista de palavras e agrupe as que são anagramas entre si, sem diferenciar maiúsculas, mantendo a ordem em que apareceram.

//8. (Difícil) Maior Trecho sem Repetir (LeetCode 3): Retorne o tamanho do maior trecho contínuo de uma string sem caracteres repetidos, passando pela string uma única vez.

//9. (Difícil) Validador de Senha com Feedback: Retorne a lista de requisitos que a senha não cumpre: mínimo 8 caracteres, uma maiúscula, uma minúscula, um número, um caractere especial e nenhum espaço. Senha válida retorna lista vazia.

//10. (Difícil) Cifra de César do Escape Room: Desloque cada letra N posições no alfabeto, dando a volta no fim, mantendo maiúsculas/minúsculas e sem mexer no que não é letra. O deslocamento pode ser negativo ou maior que 26.

/*
Exercício: formulário com prompt.
Peça o nome completo do usuário e exiba na página
informações sobre ele usando métodos de string.
(abrir o index.html no navegador)
*/
const name = prompt("Digite seu nome completo:");
document.body.innerHTML += `Seu nome é: <strong>${name}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${name.length}</strong>letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${name[1]}</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? <strong>${name.indexOf("a")}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? <strong>${name.lastIndexOf("a")}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${name.slice(-3, name.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${name.split(" ")}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${name.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${name.toLowerCase()}</strong><br />`;
