const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ status: 'OK' }))

app.listen(port, () =>
  console.log(`Server is up and listening on port ${port}`)
)