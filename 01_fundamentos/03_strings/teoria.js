// ===== Strings =====
const texto = "Nicolas Martins";

console.log(texto.length); // quantidade de caracteres
console.log(texto[1]); // caractere no índice 1
console.log(texto.indexOf("a")); // primeiro índice de "a"
console.log(texto.lastIndexOf("a")); // último índice de "a"
console.log(texto.slice(-3)); // últimos 3 caracteres
console.log(texto.split(" ")); // separa em array
console.log(texto.toUpperCase()); // maiúsculas
console.log(texto.toLowerCase()); // minúsculas

// Buscar
console.log(texto.includes("Mar")); // true
console.log(texto.startsWith("Nico"), texto.endsWith("s")); // true true

// Recortar: slice(início, fim) -> o fim não entra
console.log(texto.slice(0, 7)); // "Nicolas"

// Transformar
console.log("  oi  ".trim()); // "oi"
console.log("7".padStart(3, "0")); // "007"
console.log("a-b-c".replaceAll("-", "+")); // "a+b+c"
console.log(["a", "b", "c"].join("")); // "abc" (o contrário do split)

// Strings não mudam: os métodos devolvem uma string nova
const nome = "nico";
console.log(nome[0].toUpperCase() + nome.slice(1)); // "Nico"

// Percorrer letra por letra
for (const letra of "oi") console.log(letra);

// Remover acentos
console.log("Ação".normalize("NFD").replace(/[̀-ͯ]/g, "")); // "Acao"

// Regex básica: \d dígito | \s espaço | g todas as ocorrências
console.log("(41) 99999-0000".replace(/\D/g, "")); // só os números
