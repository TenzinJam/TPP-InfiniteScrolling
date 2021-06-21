const path = require('path')
const express = require('express')
const morgan = require('morgan')
const data = require('./data')
const PORT = process.env.PORT || 8080
const app = express()
const bodyParser = require('body-parser')
module.exports = app

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', 'public')))
console.log("inside")
app.post('/', (req, res, next) => {
  try{
    let numberOfphotos = req.body.limit
    let start = req.body.page * numberOfphotos
    let length = data.length
    let photos = data.slice(start, start + numberOfphotos)

    if(length - start < 10 ||  length < start) {
      photos = [...photos, ...data.slice(0, numberOfphotos - ((length - start)%numberOfphotos))]
    }
    // console.log("start", start, "number", numberOfphotos)
    // console.log("length", data.length)
    res.send(photos)
  }
    catch(err){
      next(err)
    }
  })
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})


//following api route is for server testing purposes. Just type the endpoint, path and the queries "page" and "limit" as your desire.
app.get('/api', (req, res) => {
  let numberOfphotos = Number(req.query.limit)
  let start = Number(req.query.page) * numberOfphotos
  let photos = data.slice(0, 2)
  res.json(photos)
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
