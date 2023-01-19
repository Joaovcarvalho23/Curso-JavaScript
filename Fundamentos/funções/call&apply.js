const produto = {
    nome: 'Notebook',
    preco: 4500,
    desconto: 0.2,
    getPreco
}

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desconto) * (1 + imposto)}`
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())
console.log(produto.getPreco())

console.log('-------------')

const carro = {preco: 50000, desconto: 0.22}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
//passa diretamente nos parâmetros do call cada um dos parâmetros que serão passados para a função

console.log(getPreco.apply(carro, [0.17, '$']))
//ao inves de passar todos os param diretamente no apply, passamos os param dentro de um array
//1° param é o obj que será usado como contexto de execução daquela função
//Depois temos um array com todos os parâmetros dentro desse array

/*
A principal diferença entre chamar uma função com o call e o apply é a passagem dos parâmetros.
*/