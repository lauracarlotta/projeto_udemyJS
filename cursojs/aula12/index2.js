// 1ª maneira Luis Otávio => + antiga

let varA = "A";
let varB = "B";
let varC = 'C';

const varATemp = varA; // criamos uma variável temporárea para o armazenamento de varA 

varA = varB; // B
varB = varC; // C
varC = varATemp; // A

console.log(varA, varB, varC)
