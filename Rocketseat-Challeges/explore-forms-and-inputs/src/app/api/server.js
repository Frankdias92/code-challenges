require('express-async-errors')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', // Permitir apenas solicitações do seu frontend
    methods: ['GET', 'POST'], // Permitir apenas os métodos GET e POST
}));

app.use(bodyParser.json())


app.get('/response', (req, res) => {
    const { name } = req.query
    res.send(`name: ${name}`)
})


app.post('/response', (req, res) => {
    const {name} = req.body

    console.log(name)
    res.json({ formData: name })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on address: http://localhost:${PORT}`))