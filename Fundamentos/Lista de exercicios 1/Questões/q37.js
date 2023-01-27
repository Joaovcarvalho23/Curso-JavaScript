/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function progressaoAritm (n, a1, r){

    for(let i = 0; i <= n; i++){
        console.log(a1 + r*i)
    }
    let an = a1 + (n - 1) * r //resultado PA
    let somaPA = ((a1 + an)*n)/2 //soma a PA

    console.log(`Valor de an da PA: ${an}\nTotal de termos de n: ${n}\nSoma da PA: ${somaPA}`)
}
progressaoAritm(10, 10, 15)
console.log('-------------------')

function progressaoGeome (n, a1, r){

    for(let i = 0; i < n; i++){
        console.log(a1 * (r**i))
    }

    let an = a1 * Math.pow(r, (n-1))
    let somaPG = (a1*(1 - r**n)) / (1-r)

    console.log(`Valor de an da PG: ${an}\nTotal de termos de n: ${n}\nSoma da PA: ${somaPG}`)
}

progressaoGeome(10, 5, 3)