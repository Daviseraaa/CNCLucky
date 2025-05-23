require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`)
})