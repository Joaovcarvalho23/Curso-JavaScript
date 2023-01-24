/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

let revendedoraCarros = function(modelo){
    switch(modelo){
        case 'hatch':
            console.log(`Modelo escolhido: ${modelo}. Compra efetuada com sucesso!\n`)
            break;

        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log(`Modelo escolhido: ${modelo}. Tem certeza que não prefere esse modelo?\n`)
            break;

        default:
            console.log(`Modelo escolhido: ${modelo}. Não trabalhamos com esse tipo de automóvel aqui.\n`)
            break;
    }
}

revendedoraCarros('motocicleta')
revendedoraCarros('hatch')
revendedoraCarros('caminhonete')
revendedoraCarros('bicicleta')
revendedoraCarros('sedan')