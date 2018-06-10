const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/prod.html'));
})

app.listen(port)
