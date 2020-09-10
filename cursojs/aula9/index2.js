const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string (template strings)
const num1 = 10; // number
const num2 = 10.52; // number (em outras linguagens isso seria float)
let nomeAluno; // undefined (indefinido) -> não aponta para lugar nenhuma na memória.
let sobrenomeAluno = null; // nulo -> não aponta para lugar nenhuma na memória.

/* 
também poderia ser const sobrenomeAluno = null;
apenas com undefined que precisou ser com let pois quando declaramos 
const, ela precisa recebe um valor, não podemos declará-la depois.
*/

/*
Há diferença entre undefined e null =>
Null = utilizamos quando queremos desconfigurar uma variável. Ex:
Quando o usuário pode configurar a cor de fundo do perfil dele, primeiramente
a variável virá com o valor nulo e quando o usuário alterar a cor, a variável receberá 
a cor 'red' por exemplo.

Já com 'undefined', nós nunca atribuiremos o valor 'undefined' a variável. O JS é quem faz isso 
altomaticamente quando a variável não recebe nenhum valor. (Será atribuido um valor no futuro
mas a variável já foi declarada.)
*/

const aprovado = true; // or false (boolean valor - valor lógico)
/*
Sempre que usamos o 'boolean', queremos mudar o fluxo da aplicação, (fazemos um desvio condicional)
ou seja
if 'true' => faça isso / else => faça aquilo
*/

/* Para verificar os tipos usamos typeof e se quisermos ver o valor, 
colocamos o nome da variável em seguida */

console.log(typeof nomeAluno, nomeAluno) // tipo é undefined e valor também é undefined.
console.log(typeof sobrenomeAluno, sobrenomeAluno) // bug, porque o JS retorna o tipo como objeto, porém não é!
