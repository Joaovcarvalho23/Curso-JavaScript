//nós armazenamos as funções anônimas em constantes/variaveis
const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(13, 10)
imprimirResultado(13, 10, soma)
imprimirResultado(13, 10, function(w, z){
    return w - z
})
imprimirResultado(3, 4, (w, z) => w*z)

//criando função dentro de um objeto
const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}
pessoa.falar()