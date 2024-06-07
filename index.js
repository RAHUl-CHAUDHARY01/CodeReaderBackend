const connectTOMongo = require('./db');
const express = require('express')
var cors= require('cors')

connectTOMongo();


const app = express()
const port = process.env.PORT ||5000

app.use(cors())
app.use(express.json());
//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => { res.send('Hello from Express!') })


app.listen(port, () => {
  console.log(`iNotebook app listening on  http://localhost:${port}`)
})