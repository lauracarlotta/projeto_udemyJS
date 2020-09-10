const nome = 'Laura';
const sobrenome = 'Custódio';
const anoNasc = 1994;
const peso = 65;
const altura = 1.64;
const sexo = "F"
let idade = 2020 - anoNasc
let imc = peso / (altura ** 2)

console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}. Ela 
tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}.`)

// Como Luiz Otávio resolveu:

console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}.`) // Com template string
console.log('Ela tem ', idade, 'anos, pesa', peso, 'kg,') // Com vírgula
console.log('tem ' + altura + ' de altura e seu IMC é de ' + imc + '.') // Concatenado.
