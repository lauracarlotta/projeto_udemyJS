let umaString = "um \"texto\"";
console.log(umaString);
/*
    => possibilidade de o texto ficar entre aspas caso você precise abrir com aspas duplas e
    fechar com aspas duplas, usamos a barra como caractere de escape.
*/


let outraString = "um \texto";
console.log(outraString);

/*
    => Caso eu precise colocar uma barra no meio de um texto ele irá apresentar assim:
        um 	exto
    (Ele meio que comeria uma letra) então neste caso, colocamos duas barrar entre as aspas
    que daria tudo certo.
*/

let terceiraString = "um \\texto";
console.log(terceiraString);


