/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadoraBasica (n1, operador, n2){
    switch(operador){
        case '+':
            return n1 + n2

        case '-':
            return n1 - n2

        case '*':
            return n1 * n2

        case '/':
            return (n1 / n2).toFixed(2)

        default:
            return 'Erro. Operação inválida'
    }
}

console.log(calculadoraBasica(2, '+', 3))
console.log(calculadoraBasica(30, '-', 7))
console.log(calculadoraBasica(10, '/', 3))
console.log(calculadoraBasica(5, '*', 3))