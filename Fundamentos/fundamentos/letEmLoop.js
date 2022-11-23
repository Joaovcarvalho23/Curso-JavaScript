//Aqui vamos criar uma constante que recebe um Array vazio, e vamos usar um laço de repetição
//para poder adicionar funções dentro desse array. Após isso, iremos invocar a função e ver
//o que acontece!

const funcao = []

for(let i = 0; i < 10; i++){
    funcao.push(function(){
        console.log(i)
    })//essa function é uma função anônima
}

funcao[2]()
funcao[6]()
funcao[8]()
//funcao[20]() dá erro!