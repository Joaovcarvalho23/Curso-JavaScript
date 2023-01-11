const pessoa = {
    saudacao: 'Olá, bom dia!',
    falar(){
        console.log(this.saudacao)//estamos acessando 'saudacao' do objeto que é dono da função (objeto pessoa)
    //estamos acessando o atributo de um obj usando o this.
    }
}
pessoa.falar()

//Vamos armazenar a função 'falar' em uma variável
const falar = pessoa.falar//nesse contexto, não estamos chamando a função falar a partir do contexto pessoa. 
//para evitar isso, utilizamos o bind

const falarDePessoa = pessoa.falar.bind(pessoa) //passamos um objeto no qual que queremos que seja resolvido o this
falarDePessoa()

//o bind é o método responsável por amarrar um determinado objeto para ele ser o dono da execução sempre que aquele método for chamado.



