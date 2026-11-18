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
