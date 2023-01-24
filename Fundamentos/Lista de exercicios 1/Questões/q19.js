/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function lanchonete (codigo, qtd){
    switch(codigo){
        case 100:
            let lanche1 = 'Cachorro Quente'
            return `Lanche escolhido: ${lanche1} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(3 * qtd).toFixed(2).replace('.', ',')}`
            break;

        case 200:
            let lanche2 = 'Hambúrguer Simples'
            return `Lanche escolhido: ${lanche2} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(4 * qtd).toFixed(2).replace('.', ',')}`
            break;

        case 300:
            let lanche3 = 'Cheeseburguer'
            return `Lanche escolhido: ${lanche3} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(5.50 * qtd).toFixed(2).replace('.', ',')}`
            break;

        case 400:
            let lanche4 = 'Bauru'
            return `Lanche escolhido: ${lanche4} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(7.50 * qtd).toFixed(2).replace('.', ',')}`
            break
        
        case 500:
            let lanche5 = 'Refrigerante'
            return `Lanche escolhido: ${lanche5} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(3.50 * qtd).toFixed(2).replace('.', ',')}`
            break;

        case 600:
            let lanche6 = 'Suco'
            return `Lanche escolhido: ${lanche6} | código: ${codigo} | quantidade: ${qtd} | Total a pagar: R$${(2.80 * qtd).toFixed(2).replace('.', ',')}` 
            break

        default:
            return 'Produto não existe!'
    }
}

console.log(lanchonete(100, 3))
console.log(lanchonete(200, 1))
console.log(lanchonete(300, 7))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 4))
console.log(lanchonete(600, 5))