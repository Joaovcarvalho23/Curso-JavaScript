function tratarErroELancar(erro){
    throw new Error('Você caiu no catch!')
    //throw 23
    //throw true
    //throw 'mensagem'
    /*
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    */
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') //'name  está aí de propósito
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'joão'}
imprimirNomeGritado(obj)

/*
Uma vez que gerou uma exceção dentro do bloco 'try', ele é redirecionado para o bloco 'catch',
e dentro do catch vc pode querer tratar o erro, como mandar uma msg pro usuário, pegar o erro
que foi gerado e fazer algum tipo de tratamento
*/