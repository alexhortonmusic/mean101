'use strict';

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

// middlewares
app.use(express.static('client')) // base directory is root, not where server is

app.listen(port, () => console.log(`Listening on port ${port}`))
