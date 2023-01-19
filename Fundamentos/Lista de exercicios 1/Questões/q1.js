/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operaValores (n1, n2){
    console.log(`Soma: ${n1 + n2} \nSubtração: ${n1 - n2}\nDivisão: ${n1 / n2}\nMultiplicação: ${n1 * n2}`)
    console.log('--------')
}

operaValores(42, 4)
operaValores(10, 2)
operaValores(15, 3)
operaValores(10, 17)