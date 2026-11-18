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
