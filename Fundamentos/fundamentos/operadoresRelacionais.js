console.log('01)', '1' == 1) //estamos comparando o valor
console.log('02)', '1' === 1) //n é igual pois compara string com number
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 > 2)
console.log('06)', 3 < 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const data1 = new Date(0)
const data2 = new Date(0)
console.log('09)', data1 === data2)
console.log('10)', data1 == data2)
console.log('11)', data1.getTime() === data2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)