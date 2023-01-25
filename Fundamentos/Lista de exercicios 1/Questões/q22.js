/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

let calculaAnuidade = function(mes, valor){
    if (mes > 0 && mes < 13){
        let atraso = mes - 1
        let valorAnuidade = (valor * Math.pow((1 + 0.05), atraso)).toFixed(2).replace('.', ',')
        
        return `O valor da anuidade a ser paga é de R$${valorAnuidade}`

    } else{
        return 'Mês inválido'
    }
}

console.log(calculaAnuidade(4, 100))
console.log(calculaAnuidade(7, 80))
console.log(calculaAnuidade(3, 100))
console.log(calculaAnuidade(8, 95))