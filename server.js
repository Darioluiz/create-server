const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'html')

nunjucks.configure('views', {
  express: server
})

server.get('/', function (req, res) {
  return res.render('index')
})

server.listen(5000, function () {
  console.log('Server is running')
})

// Aula "trazendo o front end do site para o servidor" faltou configura a stact, criar a pasta public, e puxar o CSS (template engine)
