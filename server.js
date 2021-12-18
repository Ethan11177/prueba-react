const express = require('express')
const app = express()
const port = 3000


app.get('/nel', (req, res) => {
    res.send('Nel prro')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })