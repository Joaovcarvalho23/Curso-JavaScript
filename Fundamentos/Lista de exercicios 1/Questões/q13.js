/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function verificaDiaUtil (dia){
   switch(dia){
    case 1: case 7:
        console.log(`Dia informado: ${dia}. Não é dia útil!`)
        break;

    case 2: case 3: case 4: case 5: case 6:
        console.log(`Dia informado: ${dia}. Dia é útil!`)
        break;
    
    default:
        console.log('Dia inválido.')
   } 
}

verificaDiaUtil(1)
verificaDiaUtil(4)
verificaDiaUtil(5)
verificaDiaUtil(7)
verificaDiaUtil(13)