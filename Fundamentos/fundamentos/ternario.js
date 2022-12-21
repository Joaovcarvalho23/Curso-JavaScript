function resultado (nota){
    const minhaNota = nota >= 7 ? 'Aprovado' : 'Reprovado'
    return minhaNota
}
//Podemos também fazer uma arrow function em uma linha (quando temos uma arrow function com 1 parâmetro, não passa os parenteses)
/*const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'*/ // também funciona! :)

//---Função arrow com corpo---
/*
const resultado = (nota) =>{
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/
console.log(resultado(7.5))
console.log(resultado(6.5))
console.log(resultado(5.5))
console.log(resultado(8.5))