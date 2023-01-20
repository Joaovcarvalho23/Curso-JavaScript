/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao){
    let valorJsimples = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
    console.log(`- Capital Inicial: ${capitalInicial}\n- Taxa de Juros: ${taxaJuros}\n- Tempo Aplicado: ${tempoAplicacao}\n- Juros simples: ${valorJsimples}\n\n`)
}


function jurosCompostos (capitalInicial, taxaJuros, tempoAplicacao){
    let valorJcompostos = (capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao)).toFixed(2)
    console.log(`-> Capital Inicial: ${capitalInicial}\n-> Taxa de Juros: ${taxaJuros}\n-> Tempo Aplicado: ${tempoAplicacao}\n-> Juros compostos: ${valorJcompostos}\n\n`)
}

jurosSimples(120, 0.15, 3)
jurosCompostos(100, 0.10, 2)