'use strict';

// do not use res.render or templates(pug) with a MEAN app
// use res.send OR res.json instead

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

// middlewares
app.use(express.static('client')) // base directory is root, not where server is

app.get('/api/title', (req, res) =>
  res.send({ title: 'MEAN 101 from Node' })
)

app.listen(port, () => console.log(`Listening on port ${port}`))
