![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)![Status](https://img.shields.io/badge/status-em%20andamento-yellow?style=flat-square)![Último commit](https://img.shields.io/github/last-commit/NicolasHMartinsP/Javascript-notas?style=flat-square)![Tamanho do repo](https://img.shields.io/github/repo-size/NicolasHMartinsP/Javascript-notas?style=flat-square)![Linguagem principal](https://img.shields.io/github/languages/top/NicolasHMartinsP/Javascript-notas?style=flat-square)

---

# Notas de Estudo — JavaScript e TypeScript

anotações, exemplos comentados e exercícios resolvidos do curso **JavaScript e TypeScript do básico ao avançado (JS + TS)**.

1. **Teoria** — exemplos curtos e comentados explicando o conceito.
2. **Exercícios** — exercicios realizados em cada grupo

Histórico e material de consulta rápida.

## Estrutura

O repositório segue as seções do curso. Cada seção é uma pasta, e dentro dela cada tema tem a sua pasta, sempre com os mesmos arquivos:

- `teoria.js` — anotações e exemplos do tema.
- `exercicios.js` — enunciados (comentário no topo) e resoluções.
- `index.html` — só nos temas que rodam no navegador (DOM, `prompt`, `alert`...).

### 01 — Lógica de programação

| Pasta | Conteúdo |
| --- | --- |
| [01_variaveis](01_logica_de_programacao/01_variaveis) | `let`, `const`, `var` e template strings |
| [02_tipos_primitivos](01_logica_de_programacao/02_tipos_primitivos) | `string`, `number`, `undefined`, `null`, `boolean`, `typeof` e referência |
| [03_operadores_aritmeticos](01_logica_de_programacao/03_operadores_aritmeticos) | operadores aritméticos, incremento/decremento e troca de valores |
| [04_strings](01_logica_de_programacao/04_strings) | métodos de string e formulário com `prompt` |
| [05_numeros_e_math](01_logica_de_programacao/05_numeros_e_math) | `Math.floor`, `ceil`, `round`, `random`, `pow` |
| 06_arrays | *(em breve)* |
| 07_funcoes | *(em breve)* |
| 08_objetos | *(em breve)* |
| 09_condicionais | *(em breve)* |
| 10_dom | *(em breve)* |

### Próximas seções

| Pasta | Conteúdo |
| --- | --- |
| 02_logica_de_programacao_avancada | laços de repetição, `try/catch`, timers, desestruturação *(em breve)* |
| 03_funcoes_avancadas | closures, callbacks, factory e constructor functions *(em breve)* |
| 04_objetos_e_prototypes | getters/setters, `Object`, prototypes e herança *(em breve)* |
| 05_arrays_avancado | `map`, `filter`, `reduce`, `forEach` *(em breve)* |
| 06_classes | classes, herança e métodos estáticos *(em breve)* |
| 07_promises_e_async | Promises, `async/await`, `fetch` e AJAX *(em breve)* |
| 08_modulos_e_webpack | ES6 modules, Babel e Webpack *(em breve)* |
| 09_node_e_express | Node.js, Express, MVC e banco de dados *(em breve)* |
| 10_typescript_basico | tipos, interfaces, type alias e classes no TS *(em breve)* |
| 11_typescript_avancado | generics, decorators, utility types e design patterns *(em breve)* |

# Como executar

```bash
node 01_logica_de_programacao/01_variaveis/teoria.js   # arquivos .js no Node
```

Temas com `index.html` devem ser abertos no navegador (ou com a extensão Live Server).

Para TypeScript:

```bash
npm install -g typescript
tsc arquivo.ts && node arquivo.js
```

---
