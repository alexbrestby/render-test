const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const myLogger = function (req, res, next) {
  console.log('TimeLog: ', Date.now());
  next();
};

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Main Page')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})