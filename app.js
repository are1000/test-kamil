const express = require('express')
const app = express()

const indexHtml = '<html><head><title>costam</title></head><body><b>hello</b><i>world</i></body></html>'


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(indexHtml)
})

app.get('/hello', (req, res) => {
  res.send('world')
})

app.listen(8085, () => {
	console.log('Listening at localhost:8085')
})
