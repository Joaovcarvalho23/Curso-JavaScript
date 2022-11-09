let jogador = "Lionel Messi"

console.log(jogador.charAt(0))
console.log(jogador.charAt(1))
console.log(jogador.charAt(2))
console.log(jogador.charAt(3))
console.log(jogador.charCodeAt(2))//pega o valor na tabela ascii
console.log(jogador.indexOf('o'))//indice da letra passada
console.log(jogador.substring(1))//vai a partir do indice 1 até o final
console.log('Jogador: '.concat(jogador).concat(' é o melhor jogador do mundo!'))
console.log(jogador.replace('e', 3))
console.log('João, Maria, José'.split(','))//converter de string pra array

const nome = 'João'
let concatenacao = 'Olá ' + nome + '!'
let templateString = `
    Olá
    ${nome}!
`//tamplate string é através da crase!

console.log(concatenacao)
console.log(templateString)

//podemos chamar funções com template string!
const maiusculo = texto => texto.toUpperCase()
console.log(`Ei... ${maiusculo('cuidado!')}`)