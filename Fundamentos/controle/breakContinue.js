const numeros = [5, 1, 33, 23, 12, 42, 87, 10, 7]

for(x in numeros){
    if (x == 5){
        break
    }
    console.log(`Índice ${x} = ${numeros[x]}`)
}

console.log('----------------')

for(y in numeros){
    if (y == 5){
        continue // vai interromper a repetição atual e vai direto para a próxima repetição
    }
    console.log(`Índice ${y} = ${numeros[y]}`)
}

//associando um rótulo a um laço de repetição
externo: for(a in numeros){
    for(b in numeros){
        if (a == 2 && b == 3) break externo //esse break não age mais no laço interno, mas sim no laço externo rotulado
        console.log(`Par de índices = ${a}, ${b}`)
        //achou o (2,3) e sai do laço!
    }
}

console.log('Fim!')