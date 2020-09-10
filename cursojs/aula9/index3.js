// DADOS PASSADO POR REFERENCIA x DADOS PRIMITIVOS

const a = [1,2];
const b = a; // ambas terão o mesmo valor

console.log(a, b); // [1,2][1,2]

b.push(3);
console.log(a, b); // [1,2,3][1,2,3]

/* 
Criamos uma variavel a, depois criamos uma variável b
E fiz o valor de b apontar para o mesmo local da memoria de a, por isso 
ambas as variáveis ficaram com o mesmo valor, mesmo dando push apenas em b
*/

// Quando fazemos o seguinte:
let c = 2;
let d = c; // estamos literalmente copiando valor de c em d. (Não é uma referencia, é uma cópia)

console.log(c,d) // 2,2

c = 3;

console.log(c,d) // 3,2

