//comparamos se a nota atual pode ser acessada pela palavra reservada 'this'
//se sim, é um Number. Queremos ver se o valor Number está entre o valor de
//inicio e de fim, retornando um bool
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre (9, 10)){
        console.log('Quadro de honra')
    
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')

    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    
    }else{
        console.log('Nota inválida')
    }
}

imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5.5)
imprimirResultado(2)
imprimirResultado(-3)