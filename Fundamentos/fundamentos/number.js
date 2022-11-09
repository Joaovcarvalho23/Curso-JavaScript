const peso1 = 5.0
const peso2 = Number('2.0')
const peso3 = 8.5

console.log(peso1, peso2, peso3)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso3))

const nota1 = 9.5
const nota2 = 7.5

let total = (nota1 * peso1) + (nota2 * peso2)
let media = total / 2

console.log(media.toFixed(5))
console.log(Number.isInteger(media))
console.log(media.toString(16)) //nos parênteses pode passar se é tipo binário, octal, decimal ou hexadecimal
console.log(typeof media) //tipo do dado
console.log(typeof Number)//função