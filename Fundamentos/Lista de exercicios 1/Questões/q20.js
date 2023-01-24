/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

//Criamos uma função para calcular o valor da nota real
let calcularValorNota = function (valorSaque){
    if(valorSaque >= 100){
        return 100
    } else if(valorSaque >= 50){
        return 50
    } else if(valorSaque >= 10){
        return 10
    } else if(valorSaque >= 5){
        return 5
    } else if(valorSaque >= 1){
        return 1
    } else{
        return 'Quantia de saque inválida'
    }
}

//Criamos uma função que passa como parâmetro a quantia de valor que deseja sacar
function sacarNotasDinheiro(valorSaque){
    let contadorNota1 = 0
    let contadorNota5 = 0
    let contadorNota10 = 0
    let contadorNota50 = 0
    let contadorNota100 = 0

    let valorDaNota = calcularValorNota(valorSaque)

    do{
        switch(valorDaNota){
            case 100:
                valorSaque -= 100 //saca 100 reais
                contadorNota100++ //ao sacar 100 reais, o contador incrementa
                break;

            case 50:
                valorSaque -= 50
                contadorNota50++
                break;

            case 10:
                valorSaque -= 10
                contadorNota10++
                break;

            case 5:
                valorSaque -= 5
                contadorNota5++
                break;

            case 1:
                valorSaque -= 1
                contadorNota1++
                break;

            default:
                return 'Erro!'
        }

        valorDaNota = calcularValorNota(valorSaque) // para dar o valor da nota, devemos calcular o valor dela passando o valor do saque como parâmetro

    } while(valorSaque >= valorDaNota)

    return elaborarResultado (contadorNota1, contadorNota5, contadorNota10, contadorNota50, contadorNota100)// retorna a função para elaborar o resultado
}

//Função para elaborar o resultado e determinar a quantidade de notas de cada valor
elaborarResultado = (contadorNota1, contadorNota5, contadorNota10, contadorNota50, contadorNota100) =>{
    let resultadoFinal = ''

    if (contadorNota100 > 0){
        resultadoFinal += `Quantidade de notas de 100: ${contadorNota100}\n`
    }

    if (contadorNota50 > 0){
        resultadoFinal += `Quantidade de notas de 50: ${contadorNota50}\n`
    }

    if (contadorNota10 > 0){
        resultadoFinal += `Quantidade de notas de 10: ${contadorNota10}\n`
    }

    if (contadorNota5 > 0){
        resultadoFinal += `Quantidade de notas de 5: ${contadorNota5}\n`
    }

    if (contadorNota1 > 0){
        resultadoFinal += `Quantidade de notas de 1: ${contadorNota1}\n`
    }

    return resultadoFinal
}

console.log(sacarNotasDinheiro(153))
console.log(sacarNotasDinheiro(250))
console.log(sacarNotasDinheiro(720))