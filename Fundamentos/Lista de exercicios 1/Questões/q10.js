/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

verificaDivisivelPor3 = (valor) =>{
    if(valor % 3 == 0){
        return true
    } else{
        return false
    }
}
console.log(verificaDivisivelPor3(9))
console.log(verificaDivisivelPor3(11))
console.log(verificaDivisivelPor3(12))