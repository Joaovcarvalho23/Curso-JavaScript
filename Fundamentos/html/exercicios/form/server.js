const express = require('express')
const app = express()
const bodyParser = require('body-parser') //uma vez que eu submento os dados do formulário, ele faz um parser no corpo da requisição, pega os dados e joga no request.body; Ou seja, quando acessarmos o request.body, teremos acesso a todos os dados do formulário que submetemos

app.use(bodyParser.urlencoded({ extended: true })) //urlcoded é o padrão que quando se submete o formulário padrão que vem a partir da submissao, então ele precisa fazer o parse do urlcoded

//Agora devemos atender às urls 
//requisição do tipo post em cima da url /usuarios
app.post('/usuarios', (req, resp) => { //função midware
    console.log(req.body)
    resp.send('<h1>Parabéns!!</h1>')
})

app.listen(3003)