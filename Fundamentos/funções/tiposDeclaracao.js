console.log(soma(13,10))//na declaração de uma func, primeiro carrega todas as funções p/ depois carregar as chamadas

//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(13,10))//ja na func exp., só podemos chamar depois q a função é criada

//named function expression
const mult = function mult(x, y){
    return x * y
}