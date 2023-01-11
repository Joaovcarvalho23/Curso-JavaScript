function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numEscolhido = 0

do {
    numEscolhido = getInteiroAleatorioEntre (-1, 12)
    console.log(`Número escolhido: ${numEscolhido}`)
} while (numEscolhido != -1)

console.log('Entrou na condição de saída!')