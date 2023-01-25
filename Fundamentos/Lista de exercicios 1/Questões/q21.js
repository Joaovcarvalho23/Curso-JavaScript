/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130*/

function planoSaude (idade){
    let taxa = 100

    if(idade < 10){
        return taxa + 80
    } else if(idade > 10 && idade < 30){
        return taxa + 50
    } else if(idade > 30 && idade < 60){
        return taxa + 95
    } else if (idade > 60){
        return taxa + 130
    } else{
        return 'idade inválida'
    }
}

console.log(planoSaude(3))
console.log(planoSaude(35))
console.log(planoSaude(23))
console.log(planoSaude(55))
console.log(planoSaude(80))
console.log(planoSaude('olá'))