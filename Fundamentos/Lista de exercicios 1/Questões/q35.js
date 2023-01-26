/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/

function adicionaNoVetor (vetor1, vetor2){

    console.log(`Vetor inicial: ${vetor1}`)
    for(let i = 0; i < vetor2.length; i++){
        vetor1.push(vetor2[i])
    }

    return `Vetor adicionado: ${vetor2}\nVetor resultante: ${vetor1}`
}

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(adicionaNoVetor(vetorPilha, vetorAdiciona))