/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

verificaString = (str1, str2) =>{
    let possui = true

    for(let i = 0; i < str1.length; i++){
        let charStr1 = str1.charAt(i).toLowerCase() //caso tenha alugum caracter maiusculo na str1, ele fica minusculo para fins de comparação

        for(let j = 0; j < str2.length; j++){ //o for 'j' está aninhado com o for 'i', pois para cada elemento do primeiro for ele será comparado com todos os elementos do segundo for
            let charStr2 = str2.charAt(j).toLowerCase() //caso tenha alugum caracter maiusculo na str1, ele fica minusculo para fins de comparação

            if(charStr1 == charStr2){//caso os caracteres de ambas as strings sejam iguais, retornam true. Caso não, false.
                possui = true
                break
            } else{
                possui = false
            }
        }

        if(!possui) return possui
    }

    return possui
}

console.log(verificaString('abcdf', 'dcba'))
console.log(verificaString('abcd', 'abcd'))
console.log(verificaString('ABcd', 'abCD'))
console.log(verificaString('abd', 'DCBAx'))