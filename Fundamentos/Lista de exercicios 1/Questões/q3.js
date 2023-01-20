//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function numeroElevado (base, expoente){
    let resultado = Math.pow(base, expoente)
    console.log(`O resultado do número ${base} elevado à potência de ${expoente} é igual a: ${resultado}`)
}
numeroElevado(4, 2)
numeroElevado(5, 2)
numeroElevado(4, 3)
numeroElevado(8, 2)