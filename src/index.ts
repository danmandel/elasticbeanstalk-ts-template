import express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use((req, res) => {
  res.send('hi')
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
