import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

const app = express()

app.disable('x-powered-by')

app.set('env', 'development')

app.use(logger('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.setHeader("Reponse",200)
  res.render('homeVars', { title: 'Open Webinars!', message: 'Cursos NodeJS!', tonteria: 'Mi tonteria' })
})

app.listen('9000', () => {
  console.log('Server opened listening on http://localhost:9000')
})
