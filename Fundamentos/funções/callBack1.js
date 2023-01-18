const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
console.log('--------------')
fabricantes.forEach(meuFabricante => console.log(meuFabricante))
console.log('--------------')
fabricantes.forEach(function (meuFabricante2){
    console.log(meuFabricante2)
})
/*O callback é vc passar uma função, e essa função será chamada quando um evento acontecer*/
