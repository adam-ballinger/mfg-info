const express = require('express')
const app = express()
const http = require('http').Server(app)

app.use(express.static(__dirname))
var server = http.listen(process.env.PORT || '3000', () => {
    console.log('Server is listening on port', server.address().port)
})