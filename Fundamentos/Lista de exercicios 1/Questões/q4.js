/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

let operaDivisao = function (dividendo, divisor){
    
    let resultado = dividendo / divisor
    let resto = dividendo % divisor

    console.log(`${dividendo} dividido por ${divisor} é igual a: ${resultado}`)
    console.log(`O resto da divisão feita acima é: ${resto}\n`)
}
operaDivisao(10,5)
operaDivisao(61,2)