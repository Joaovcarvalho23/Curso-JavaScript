function numAleatorio({minimo = 0, maximo = 1000}){
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)//arredonda pra baixo
}

const objeto = {maximo: 1000, minimo: 950}
console.log(numAleatorio(objeto))

console.log(numAleatorio({minimo: 600}))

console.log(numAleatorio({}))

//console.log(numAleatorio()) //dá erro pois não estamos passando nenhum objeto como parâmetro
