/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function verificaIntervalo (vetorNumeros){
    let contaDentroIntervalo = 0
    let contaForaIntervalo = 0

    for(let i = 1; i <= vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            contaDentroIntervalo++
        } else{
            contaForaIntervalo++
        }
    }

    console.log(`Total de números dentro do intervalo de 10 a 20: ${contaDentroIntervalo}\nTotal de números fora do intervalo: ${contaForaIntervalo}`)
}

let meuVetor = [1, 4, 7, 13, 15, 17, 23, 50, 9]
verificaIntervalo(meuVetor)