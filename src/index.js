const express  = require('express')
const app  = express()

const __buildpath = `${__dirname}/build/index.html`

app.get('/', (req, res) => {
  res.sendFile(__buildpath)
})

app.listen(process.env.PORT || 3000)