const path = require('path')
const express = require('express')
const morgan = require('morgan')
const data = require('../server/data')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  // app.use('/api', require('./api'))
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
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

  app.get('/', (req, res, next) => {
    try{

      let numberOfPhotos = req.body.limit
      let start = req.body.page * numberOfPhotos
      let photos = data.slice(start, start + numberOfPhotos)
      console.log(photos)
      res.json(photos)
    }
    catch(err){
      next(err)
    }
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
