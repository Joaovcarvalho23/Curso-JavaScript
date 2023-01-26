/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function calculaMediaAritmetica (vetor){
    let somaValores = 0
    for(let i = 0; i < vetor.length; i++){
        somaValores += vetor[i]
    }

    let resultado = somaValores/vetor.length

    console.log(`Array de valores: ${vetor}\nA média aritmética dos valores do array é de: ${resultado}`)
}

let meuVetor = [5, 10, 15]
calculaMediaAritmetica(meuVetor)