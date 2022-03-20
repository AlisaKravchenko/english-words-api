const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const products = [
    {
        id: 1,
        name: 'phone',
        price: 300
    },{
        id: 2,
        name: 'tablet',
        price: 700
    }
]

app.get('/products', (req, res) => res.json(products))


app.listen(3000, () => console.log('listening on 3000!'))
