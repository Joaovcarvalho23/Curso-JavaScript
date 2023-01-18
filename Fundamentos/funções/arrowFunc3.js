let comparaComThis = function(parametro){
    console.log(this === parametro)
}
comparaComThis(global)

const objeto = {}
comparaComThis = comparaComThis.bind(objeto)//associando o comparaComThis ao objeto, com bind
//agora sempre que chamamos 'comparaComThis' ele aponta para 'objeto', e não mais para o escopo global

comparaComThis(global)
comparaComThis(objeto)


let comparaComThisArrow = parametro =>{
    console.log(this === parametro)
}
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(objeto)
comparaComThisArrow(objeto)
//arrow function > bind
comparaComThisArrow(module.exports)