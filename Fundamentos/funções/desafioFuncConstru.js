function criarPessoa(nome, idade, cpf){
    return{
        mostrarDados: function(){
            console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e meu CPF é ${cpf}`)
        }
    }
}
const p1 = new criarPessoa('João', 21, '123.456.789-01')
const p2 = new criarPessoa('Priscylla', 23, '321.654.987-10')
const p3 = new criarPessoa('Roger', 22, '312.444.555-87')

p1.mostrarDados()
p2.mostrarDados()
p3.mostrarDados()