const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4001
const mongoose = require('mongoose')

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('DB Connected'))

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.post('/', (req, res) => {
    res.json({
        msg: 'OK',
        data: req.body
    })
})

app.listen(port, () => {
    console.log('Server is running on ' + port)
})