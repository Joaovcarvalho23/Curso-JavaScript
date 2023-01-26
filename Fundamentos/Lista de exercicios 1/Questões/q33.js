/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let vetorInt = [23, 7, 17, 8, 10]
let vetorStr = ['João', 'Pri', 'Roger', 'Abraao', 'Lunna']
let vetorDouble = [8.5, 2.3, 7.9, 4.7]

function concatenaVetores () {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    console.log(resultado)
}

concatenaVetores(vetorDouble, vetorStr)
concatenaVetores(vetorDouble, vetorInt, vetorStr)