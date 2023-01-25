/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function verificaNegativos (vetorNumeros){
    let contaNegativos = 0
    let listaNegativos = []
    for( let i = 0; i <= vetorNumeros.length; i++){
        if(vetorNumeros[i] < 0){
            listaNegativos.push(vetorNumeros[i])
            contaNegativos++
        }
    }
    
    console.log(`Total de números negativos do vetor: ${contaNegativos}`)
    console.log(`Números negativos do vetor: ${listaNegativos}\n\n`)
}
let meuVetor = [1, 2, -3, 4, -5, -6, 7, 8, -9]
verificaNegativos(meuVetor)