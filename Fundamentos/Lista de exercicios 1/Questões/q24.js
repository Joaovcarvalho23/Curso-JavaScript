/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/
let frase = 'Hello World!'

function imprimeHelloWorld (frase){
    let indice = 0

    while(indice < 11){
        console.log(frase)
        indice++
    }
}

console.log(imprimeHelloWorld(frase))