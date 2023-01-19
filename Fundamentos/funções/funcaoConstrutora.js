function meuCarro (velMaxima = 300, delta = 7){
    //atributo privado
    let velAtual = 0

    //método público
    this.acelerar = function(){
        if (velAtual + delta <= velMaxima){
            velAtual += delta
        } else{
            velAtual = velMaxima
        }
    }

    //método público
    this.getVelAtual = function(){
        return velAtual
    }
}

const palio = new meuCarro
palio.acelerar()
console.log(palio.getVelAtual())

console.log('------------')

const ferrari = new meuCarro(370, 15)
ferrari.acelerar()
console.log(ferrari.getVelAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual())