//conceitos super básicos do 'if'

function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.5)
soBoaNoticia(6.0)

//dentro de um if, quando passamos apenas um elemento como condição,
//o próprio JS converte esse elemento para um boolean e determina
//'true' como valor padrão. Vejamos no exemplo abaixo...
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(valor + ' é verdade!')
    }
}

seForVerdadeEuFalo(1)
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo('bla bla bla')
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(' ')