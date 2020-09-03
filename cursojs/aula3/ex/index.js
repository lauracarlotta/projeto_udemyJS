/* Ex: No console deve aparecer assim:
Meu nome é "NOME". Estou aprendendo JavaScript às 10 horas da manhã.

Eu resolvi assim: */

const nome ="Laura";

console.log('Meu nome é "', nome, '". Estou aprendendo JavaScript às', 17, 'horas da tarde.');

/* No caso, o Luiz Otávio apenas usou o console.log! */
console.log('Meu nome é "Laura". Estou aprendendo JavaScript às', 17, 'horas da tarde!');

// Eu ainda poderia fazer assim (vi no curso em vídeo):

let name = "Laura"
let hora = 18

console.log(`Meu nome é "${nome}". Estou aprendendo JavaScript às ${hora} da noite!`)