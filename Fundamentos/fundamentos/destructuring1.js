//Tira algo de uma estrutura

//estrutura = objeto -> É uma forma de extrair de um objeto
//seus atributos. Também podemos tirar elementos de um array.

//exemplos...
const pessoa ={
    nome: 'Joao',
    idade: 21,
    endereco: {
        logradouro: 'Rua da lama',
        numero: 2307
    }
}

//operador de desestruturação de um objeto!:
const {nome, idade} = pessoa
//"extraia do objeto 'pessoa' os atributos nome e idade"
console.log(nome, idade)

//também podemos atribuir valores para os atributos para acessar mais facilmente
const {nome: n, idade: i} = pessoa
console.log(n, i)

//quando tentamos extrair um atributo que não existe, o mesmo vale undefined
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//quando tentamos extrair um dado aninhado (atributo que possui outros subatributos), dá erro pois estamos tentando
//acessar alguma coisa que não é um objeto!
/*
const {conta: {agencia, num}} = pessoa
console.log(agencia, num)
*/