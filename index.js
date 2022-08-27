const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const connectMongo = require('./db/connect')
const routes = require('./routes/routes')

// set port app
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// config cors
app.use(cors({
    origin: '*'
}));
// connect data base
app.use(connectMongo)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// intitail routes
routes(app)
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

module.exports = app