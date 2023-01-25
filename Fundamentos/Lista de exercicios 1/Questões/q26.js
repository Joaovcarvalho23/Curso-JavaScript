/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

let encontraPares = function(){
    let contadorPares = 0

    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
            contadorPares++
        }
    }

    console.log(`Total de números pares entre 1 e 100: ${contadorPares} números pares.\n`)
}

encontraPares()