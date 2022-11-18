//Função sem retorno
function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(2,3)
imprimeSoma(2)
imprimeSoma()
imprimeSoma(2,10, 14, 34, 56)

//Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(20,3))
console.log(soma(2))
