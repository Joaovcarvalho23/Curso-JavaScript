/*12) Faça um algoritmo que calcule o fatorial de um número.*/

calculaFatorial = (numero) =>{
    if (numero == 0){
        return 1
    } else{
        return numero * calculaFatorial(numero - 1)
    }
}
console.log(calculaFatorial(4))
console.log(calculaFatorial(10))
console.log(calculaFatorial(24))
console.log(calculaFatorial(12))
console.log(calculaFatorial(7))