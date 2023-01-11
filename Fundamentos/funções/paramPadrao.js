//Estratégia 1 para gerar valor padrão (não muito usado, pois pode dar bug (ultimo exemplo))
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//Estratégia 2, 3, 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1//já que o 1º arg é do índice 0, "dentro de args, existe o indice 1? se sim pegue b, se não pegue 1(valor padrão)"
    c = isNaN(c) ? 1 : c//testando se uma var passada é um NaN. Se c for NaN retorne o valor padrão, caso seja um número retorna o valor de c (+ segura)
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))