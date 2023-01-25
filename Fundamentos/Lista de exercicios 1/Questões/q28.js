/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function contaParEImpar (vetorNum){
    contaPar = 0
    contaImpar = 0

    for(let i = 1; i <= vetorNum.length; i++){
        if(vetorNum[i] % 2 == 0){
            contaPar++
        } else {
            contaImpar++
        }
    }

    return `Quantidade de números pares: ${contaPar} | Quantidade de números ímpares: ${contaImpar}`
}

let meuVetor = [1, 2, 3, 5, 7, 8, 9, 23, 17, 10]
console.log(contaParEImpar(meuVetor))