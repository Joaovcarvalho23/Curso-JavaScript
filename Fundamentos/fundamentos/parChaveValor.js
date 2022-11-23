// par chave \ valor
const saudacao = 'Olá!!' //contexto léxico 1

function exec(){
    const saudacao = 'Tudo bem?' // contexto léxico 2
    return saudacao
    //ele vai buscar o valor da variável interna (dentro da função).
    //Se não achar, vai buscar fora da função (global). Busca no contexto maior. se não achar em nenhum dos
    //contextos, retorna erro ou undefined!
}

//obj são grupos aninhados de pares nome/valor
const pessoa ={
    nome: 'João',
    idade: 21,
    peso: 83,
    endereco: {
        rua: 'Rua da Lama',
        numero: 2307
    }
}

console.log(saudacao)
console.log(exec)
console.log(exec())
console.log(pessoa)