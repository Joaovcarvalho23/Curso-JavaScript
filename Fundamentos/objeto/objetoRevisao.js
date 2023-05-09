//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'João',
        idade: 22,
        endereco: {
            logradouro: 'Rua da Lama',
            numero: 155
        }
    },
    condutores: [{
        nome: 'João',
        idade: 22
    }, {
        nome: 'Pri',
        idade: 23
    }, {
        nome: 'José',
        idade: 25
    }],

    calcularValorSeguro: function() {
        //....
    }
}

carro.proprietario.endereco.numero = 5000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
console.log(`Total de condutores: ${carro.condutores.length}`)

console.log('\nDeletando...\n')
delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)