/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function classificaAluno (codigo, nota1, nota2, nota3){
    let notas = []

    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((x, y) => x < y ? 1 : -1) //ordena os elementos do próprio array e retorna o array. Sintaxe: arr.sort([funcaoDeComparacao])
    //vamos ordenar da maior p/ menor. Para assim poder atribuir os pesos

    let media = (notas[0]*4 + notas[1]*3 + notas[2]*3)/10
    let situacao = ''

    if(media < 5){
        situacao = "REPROVADO."
    } else if(media >= 5){
        situacao = "APROVADO!"
    } else{
        situacao = 'Error'
    }

    return `Código do aluno: ${codigo} | nota 1: ${nota1}; nota 2: ${nota2}; nota 3: ${nota3} | Média: ${media} | Situação: ${situacao}`
    //poderia ser da seguinte forma:
    //console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)// aqui tem um erro, pois se passar qualquer valor p/ nota, vai ser um NaN, e vai retornar Aprovado
}

console.log(classificaAluno(23, 8, 7.5, 9))
console.log(classificaAluno(25, 5, 4.5, 3))
console.log(classificaAluno(27, 'a', 7.5, 9))