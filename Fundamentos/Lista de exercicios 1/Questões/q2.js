/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
//Usando arrow function
let verificaTriangulo = (lado1, lado2, lado3) =>{
    if(lado1 == lado2 && lado2 == lado3){
        console.log("O triângulo é equilátero!")
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("O triângulo é isósceles!")
    } else{
        console.log("O triângulo é escaleno!")
    }
}
verificaTriangulo(2, 2, 2)
verificaTriangulo(2, 5, 2)
verificaTriangulo(2, 1, 3)