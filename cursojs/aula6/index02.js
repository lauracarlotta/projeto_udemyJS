let nome;

/*
Dará 'undefined' pois não declaramos o valor ainda.
Ou seja, a engine do JS entende que foi declarada a variável 
porém a mesma não foi declarada com nenhum valor.
*/

nome = 'Qualquer valor!'; // Inicializando a variável.
console.log(nome);
nome = 'Laurinha, isso mesmo!';
console.log(nome);
// let nome = "Maria" (SyntaxError: Identifier 'nome' has already been declared)
