function criarProduto (nome, preco){
    return{
        nome,
        preco,
        desconto: 0.12
    }
}

console.log(criarProduto('PC', 5900.00))
console.log(criarProduto('Bola', 39.00))
console.log(criarProduto('Camisa', 80.00))