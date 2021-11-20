const express = require("express")
const bodyParser = require("body-parser")
const pg = require('pg')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js Express, and Postgres API'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

const Pool = pg.Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'CollegeDB',
    
})

