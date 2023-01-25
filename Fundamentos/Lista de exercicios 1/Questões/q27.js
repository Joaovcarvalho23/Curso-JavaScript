/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

//função para calcular quantos anos tem
calculaTempo = (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) =>{
    let quantidadeAnos = 0

    while(alturaMenor < alturaMaior){
        alturaMaior += taxaAlturaMaior
        alturaMenor += taxaAlturaMenor
        quantidadeAnos++
    }

    return quantidadeAnos
}

//função para calcular o crescimento
function calculaCrescimento (alturaCrianca1, taxaCrianca1, alturaCrianca2, taxaCrianca2){

    if(alturaCrianca1 == alturaCrianca2){
        if(taxaCrianca1 > taxaCrianca2){
            return 'a criança 1 vai ultrapassar a criança 2 em 1 ano!'
        } else if(taxaCrianca1 < taxaCrianca2){
            return 'a criança 2 vai ultrapassar a criança 1 em 1 ano!'
        } else{
            return 'nenhuma criança irá ultrapassar a outra!'
        }

    } else{
        if(alturaCrianca1 >= alturaCrianca2){
            if(taxaCrianca1 >= taxaCrianca2){
                return 'A criança menor não irá ultrapassar a maior'
            } else {
                return `A criança menor vai ultrapassar a criança maior em ${calculaTempo(alturaCrianca2, taxaCrianca2, alturaCrianca1, taxaCrianca1)} anos.`
            }

        } else{
            if(taxaCrianca2 >= taxaCrianca1){
                return 'A criança menor não irá ultrapassar a maior'
            } else{
                return `A criança menor vai ultrapassar a criança maior em ${calculaTempo(alturaCrianca1, taxaCrianca1, alturaCrianca2, taxaCrianca2)} anos.`
            }
        }
    }
}

console.log(calculaCrescimento(150, 2, 130, 4))