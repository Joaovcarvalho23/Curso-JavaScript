console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //Desnecessário
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    //nome associado ao objeto que foi criado a partir dessa função  
    this.exec = function(){
        console.log('Executando...')
    }
}

const obj2 = new Obj('Cadeira')//que vai ser atribuida ao 'this.nome'
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()