// ECMAScript 2015 (ES6) => padronização do JS

var nome = "Luiz";
var nome = "Otávio"; // com let isso geraria um erro*

console.log(nome)

/* Podemos ainda fazer da seguinte forma:

nome = "Laura"; // sem let ou var

NÃO FAÇA ISSO!! Isso gerará uma variável global que poderá causar problemas em outras variáveis
do código. Então sempre especifique se a variável será criada com var, let ou const. Isso evitará
problemas no futuro. (Já banimos o var do nosso código) então seria com const ou let.

*/

// Com let seria assim:
let nomeAluno = "Laura";
// Para redeclarar, não adicionamos o let, só o nome da variável.
nomeAluno = "Wellington";

console.log(nomeAluno)
