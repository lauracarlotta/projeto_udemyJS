/* 
    O exercicio era recer dois números do usuário através do prompt, somá-los e em seguida
    apresentar um alert com a resposta.
*/

let numero1 = prompt("Digite um número: ");
let numero2 = prompt("Digite outro número: ");
numero1 = Number(numero1);
numero2 = Number(numero2);
const soma = numero1 + numero2
alert(`A soma de ${numero1} + ${numero2} é igual a ${soma}!`)
