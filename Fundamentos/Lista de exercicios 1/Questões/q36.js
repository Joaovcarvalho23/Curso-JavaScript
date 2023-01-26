/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function multiplicandoVetor(vetor, multiplicador){
    let resultado1 = [] //o vetor começa vazio

    vetor.forEach(element => { //realiza operações por cada elemento do array
        resultado1.push(element * multiplicador)
    });

    console.log(resultado1)
}

let multiplicandoVetorSeMaiorQue5 = function(vetor, multiplicador){
    let resultado2 = []

    if(multiplicador < 5){
        console.log(`Erro. Não é possível realizar a operação!`)
        return
    }

    vetor.forEach(element => {
        resultado2.push(element * multiplicador)
    });

    console.log(resultado2)
}

let meuVetor = [1, 2, 3, 4, 5]

multiplicandoVetor(meuVetor, 5)
multiplicandoVetorSeMaiorQue5(meuVetor, 2)
multiplicandoVetorSeMaiorQue5(meuVetor, 8)