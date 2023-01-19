class Pessoa{
    constructor (nomePessoa){
        this.nomePessoa = nomePessoa
    }

    falar = function(){
        console.log(`Meu nome é ${this.nomePessoa}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()


const gerarPessoa = function(nome){
    return{
        falar: function(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}
const p2 = new gerarPessoa('Priscylla')
p2.falar()