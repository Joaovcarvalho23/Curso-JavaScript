function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    const compraTV32 = trabalho1 != trabalho2 //xor ('ou' exclusivo!)
    const saudavel = !compraSorvete

    return {compraSorvete, compraTV50, compraTV32, saudavel}
}

console.log(compras(true, true))
console.log('------------')

console.log(compras(true, false))
console.log('------------')

console.log(compras(false, true))
console.log('------------')

console.log(compras(false, false))
console.log('------------')