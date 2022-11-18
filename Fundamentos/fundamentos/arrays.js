const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//acesa valor por índice
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)

//função p/ adicionar novos elementos no array
valores.push({id: 3}, false, null, 'teste', 2.3)
console.log(valores)

console.log(valores.pop())//pega o último valor do array
delete valores[0]//excluir elementos de um array

console.log(valores)
console.log(typeof valores)