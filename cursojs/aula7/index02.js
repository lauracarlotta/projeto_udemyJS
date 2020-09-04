// + - * / % **

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 100;

console.log(resultadoTriplicado)

// Porém, agora perdemos o valor inicial do resultadoTriplicado

/* 
para garantirmos saber qual a tipagem de cada valor das constantes,
podemos usar os seguintes comandos:
*/

console.log(typeof(primeiroNumero))

/*
Uma coisa que precisamos saber pra não termos probelmas no futuro é 
o tipo das informações, uma vez que eu precise fazer operações com números,
caso eu tenha uma string + um number (ex: const primeiroNumero = '5'; 
const segundoNumero = 10;), o resultado disso seria a concatenação 
das informações e não a soma dos números. (o resultado seria 510)
*/