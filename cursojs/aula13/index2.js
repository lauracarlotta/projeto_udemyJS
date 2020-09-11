//Strings são indexaveis, pois são iteraveis, ou seja, podemos itertarsobre eles.

//               01234567   <= índice dos caracteres
let umaString = "um texto";

console.log(umaString[3]);
console.log(umaString[8]); // <= retornará undefined, não aponta pra lugar nenhum na memória
console.log(umaString.charAt(5)); // <= faz a mesma função que a linha de cima
// com o .charAt , caso eu solicite um índice que não exista não dará erro, não apresentará nada.
console.log(umaString.charCodeAt(1)); // <= retornara o valor da tabela ask que é o valor da letra 'm'
console.log(umaString.concat(' em',' um lindo dia!')); // <= concatena o texto
console.log(umaString + ' em um lindo dia!');
console.log(`${umaString} em um lindo dia!`);
console.log(umaString.indexOf('texto')); // em que posição no índice começa a palavra "texto".
// caso o .indexOf não encontre nada, ele retornará -1
console.log(umaString.indexOf('um',3))
// Se eu coloco "um" pra começar a pesquisar a partir do índice 3, ele retornará -1, outra vez.
console.log(umaString.indexOf('texto',2)) // Já aqui ele retornará "3" que é onde começa a palavra texto
console.log(umaString.lastIndexOf('um',2)) // ordem decrescente, do o último p/ o 1º, de trás pra frente
console.log(umaString.match(/[a-z]/g)); // ** Expressões regulares, retorna todas as letras minúsculas da string
console.log(umaString.match(/[a-z]/)); // ** Expressões regulares - retorna [ 'u', index: 0, input: 'um texto', groups: undefined ]
console.log(umaString.search(/x/)); // ** Expressões regulares - parece com o indexOf() - retornará "5"
console.log(umaString.replace(/Um/, "outra")); // ** Expressões regulares - Trocará 'um' por 'outra', assim como na linha de baixo:
console.log(umaString.replace("Um", "outra"));

//                 0123456789
let outraString = "O rato roeu a roupa do rei de Roma.";
console.log(outraString.replace(/r/g, "#")); // Irá trocar todas as letras 'r' por '#' (Isso porque contém o 'g' após o r na expressão regular, caso contrário, trocaria apenas o 1º 'r')

// para saber o tamanho da string
console.log(outraString.length) // não precisa de parenteses após .length pois não é uma função, e sim um atributo
console.log(outraString.slice(2,6)); // para mostrar uma palavra exata, dou o índice de inicio e o índice final com um a mais.
// console.log(outraString.slice(-3)); É como se eu tivesse no numero 32 da string. Veja com F8.
console.log(outraString.slice(-3));
console.log(outraString.slice(32));
console.log(outraString.slice(-5,-1));
console.log(outraString.split(" "));// Dividir a plavra por partes, no caso, colocarmos o caractere que seria o que marcaria cada palavra, nesse caso, usamos espaços.
console.log(outraString.split(" ", 3)); // ainda podemos limitar a quantidade de vezes que queremos isso.
console.log(outraString.toUpperCase()); // para maiusculas
console.log(outraString.toLowerCase()); // para minusculas