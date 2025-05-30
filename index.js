const express = require('express')
const mustacheExpress = require('mustache-express')

const portfolioRouter = require('./routes/portfolio')

const PORT = process.env.PORT || 3000

const app = express()
app.engine('mustache', mustacheExpress('./views/partials', '.mustache'))
app.set('views', './views') 
app.set('view engine', 'mustache')

app.use('/css', express.static('css'))
app.use('/pictures', express.static('pictures'))
app.use('/content', express.static('content'))
app.use('/', portfolioRouter)

app.listen(PORT, () => {
    console.log('--MyPortfolio--')
    console.log('Running on:', PORT)
})