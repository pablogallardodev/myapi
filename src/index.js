const express = require('express')
const path = require('path')
const dbRoute = require('./routes/db')
const appRoute = require('./routes/app')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, './app')))
app.use('/', appRoute)
app.use('/api/db', dbRoute)

app.listen(PORT, () => {
  console.log(`Server is already on port http://localhost:${PORT}/`)
})