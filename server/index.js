const path = require('path')
const express = require('express')
const morgan = require('morgan')
const data = require('./data')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use('/api', require('./api'))
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  app.get('/api/photos', (req, res) => {
    let start = req.query.page
    let numberOfPhotos = req.query.limit

    let photos = data.slice(start, numberOfPhotos+1)
    res.send(photos)
  });


  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
  )
}


async function bootApp() {
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
