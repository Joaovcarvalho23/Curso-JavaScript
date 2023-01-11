//Dentro da função, nós temos como recuperar parâmetros, utilizando o 'arguments'
//arguments é um array interno que, quando não pasamos param, nós podemos preencher com vários parâmetros na função
function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2.2, 3.3, 4.4, 5.5))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a ', 'b ', 'c'))