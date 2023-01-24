/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calculaAumento(salario, plano){
    switch(plano){
        case 'A':
            let salarioA = salario * 1.1
            return `Salário: ${salario} | Plano: ${plano} | Salário aumentado pelo plano: ${salarioA}`

        case 'B':
            let salarioB = salario * 1.15
            return `Salário: ${salario} | Plano: ${plano} | Salário aumentado pelo plano: ${salarioB}`

        case 'C':
            let salarioC = salario * 1.2
            return `Salário: ${salario} | Plano: ${plano} | Salário aumentado pelo plano: ${salarioC}`

        default:
            return 'Plano inválido'
    }
}

console.log(calculaAumento(2500.50, 'A'))
console.log(calculaAumento(5300.20, 'B'))
console.log(calculaAumento(7300.32, 'C'))