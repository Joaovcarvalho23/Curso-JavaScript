//IIFE -> Immediatly Function Expression

//Fora do escopo de abrangente
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo abrangente!')
}
)()

//Dentro do escopo abrangente
console.log('Não será executado na hora!')
console.log('Dentro do escopo abrangente!')