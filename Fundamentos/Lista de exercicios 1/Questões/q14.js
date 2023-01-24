/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

verificaFruta = (fruta) =>{
    switch(fruta){
        case 'maçã':
            console.log(`Fruta escolhida: ${fruta}. Não vendemos esta fruta aqui`)
            break;
        
        case 'kiwi':
            console.log(`Fruta escolhida: ${fruta}. Estamos com escassez de kiwis`)
            break;

        case 'melancia':
            console.log(`Fruta escolhida: ${fruta}. Aqui está, são 3 reais o quilo`)
            break;

        default:
            console.log(`Fruta escolhida: ${fruta}. Erro. Fruta inválida.`)
            break;
    }
}

verificaFruta('maçã')
verificaFruta('banana')
verificaFruta('melancia')
verificaFruta('laranja')
verificaFruta('kiwi')