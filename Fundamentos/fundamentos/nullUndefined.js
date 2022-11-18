let valor //foi declarado, mas não foi inicializada
console.log(valor) //undefined

valor = null //ausência de valor
console.log(valor) //null
//console.log(valor.toString())//erro

const produto = {}
console.log(produto.preco)// undefined
console.log(produto)

produto.preco = 10.5
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)