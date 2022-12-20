function numerosAleatorios([minimo = 0, maximo = 1000]){
    if (minimo > maximo) [minimo, maximo] = [maximo, minimo]
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

console.log(numerosAleatorios([70, 40])) //atribuimos valores de min e max
console.log(numerosAleatorios([990])) //atribuimos apenas o min. o max é o padrão
console.log(numerosAleatorios([ , 10]))//min é o padrao, atribuimos um valor para max
console.log(numerosAleatorios([])) //valores padrões de min e max
//console.log(numerosAleatorios()) //dá erro pois não passamos nenhum array como parametro, não dá para acessar algo que não existe.
