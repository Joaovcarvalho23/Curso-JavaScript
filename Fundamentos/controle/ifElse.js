const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    } else{
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(9)
imprimirResultado('Epa') //cuidado! não condiz com o tipo de condição!