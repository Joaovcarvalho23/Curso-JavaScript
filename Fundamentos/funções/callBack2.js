//queremos gerar um novo array com todas as notas abaixo de 7

//Sem callback...
const notas = [2.3, 7.5, 8.8, 9.2, 7.6, 5.5, 6.7]

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


//Com callback
const notasBaixas2 = notas.filter(function (minhaNota){
    return minhaNota < 7
})//função que vai filtrar os elementos de um array em cima de um certo critério (retorna true ou false)
console.log(notasBaixas2)

//callback com arrowfunc
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)