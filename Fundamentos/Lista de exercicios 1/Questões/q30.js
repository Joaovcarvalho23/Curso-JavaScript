/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function maiorMenor (vetorNumeros){
    let maiorValor
    let menorValor

    for(let i = 0; i <= vetorNumeros.length; i++){
        if(maiorValor == undefined && menorValor == undefined){
            maiorValor = vetorNumeros[i]
            menorValor = vetorNumeros[i]
        } else{
            if(vetorNumeros[i] > maiorValor){
                maiorValor = vetorNumeros[i]
            }

            if(vetorNumeros[i] < menorValor){
                menorValor = vetorNumeros[i]
            }
        }
    }

    console.log(`Maior valor da lista: ${maiorValor}\nMenor valor da lista: ${menorValor}`)
}

let meuVetor = [5, 8, 10, 23, 50, 100, 1, 17]
maiorMenor(meuVetor)