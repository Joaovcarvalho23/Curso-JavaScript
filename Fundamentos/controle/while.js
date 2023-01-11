function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numEscolhido = 0

while (numEscolhido != -1){
    numEscolhido = getInteiroAleatorioEntre (-1, 12)
    console.log(`Número escolhido: ${numEscolhido}`)
}

console.log('Entrou na condição de saída!')