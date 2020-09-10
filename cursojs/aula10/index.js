// ARITMÉTICOS

// + => ADIÇÃO, CONCATENAÇÃO (JUNÇÃO DE DOIS VALORES)
// - / * => SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO
// ** => POTENCIAÇÃO
// % => RESTO DA DIVISÃO

const num1 = 10;
const num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// ORDEM DE PRECEDENCIA:

/* 
1° -> ()
2° -> **
3° -> * / %
4° -> + - 
*/

// INCREMENTO

let contador = 1;
contador ++;

console.log(contador); // 2 (1++  => 1+1 = 2)

/* ou decremento (--) e ainda pode ser pré ou pós, assim: contador++ ou ++contador => 
 dependendo do que você fizer o resultados será diferente! FIQUE ATENTO NISSO!
 
 Nan - Not a Number */


 // DE ATRIBUIÇÃO

/*
+= MAIS IGUAL
-= MENOS IGUAL
*= VEZES IGUAL
/= DIVIDIDO IGUAL
**= ELEVADO IGUAL
*/

/* 
A partir dos exemplos acima/;
    let num1 = 10;
    let num2 = '5';
    
Toda conta, deve ser executada com numbers, caso eu tente fazer uma conta com 
uma string e um number, para adição, retornará uma concatenação. Ex: 105 (que seria 10 e 5);
para multiplicação, retornará 50 (o JS consegur resolver isso: retira a string e transforma em número).
Toda vez que eu colocar alguma coisa entre parenteses
eu to pedindo apra que alguma ação seja executada naquele valor específico 
logo, se eu quiser ter certeza de que será feito uma conta com uma string eu posso fazer o seguinte:

    let num1 = 10;
    let num2 = parseInt('5'); // transformará em número inteiro; ou usamos parseFloat para numeros com casas decimais.
        (ou usamos parseFloat para números com casas decimais.) 
    pedindo para mostrar na tela
        console.log(num1 + num2) => 15.

        Tem ainda a maneira generica que não tem diferença entre inteiro ou decimal que é o Number

        então ficaria assim: 
            let num2 = Number('5') ou
            let num2 = Number('5.2')
                darão => 15 ou
                         15.2
*/
