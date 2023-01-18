function Pessoa(){
    this.idade = 0
    
    const self = this //constante que recebe a referência de this
    //e já que this agora é uma const, nunca irá mudar de valor, podendo ser trocada por self


    //essa função dispara outra função a partir de um intervalo passado.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //a idade será incrementada a cada 1000ms
//usamos o bind para amarrar o 'this' do objeto a chamada dessa função
}
//podemos usar o bind ou criamos uma constante

new Pessoa