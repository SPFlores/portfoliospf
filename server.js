const express = require('express')
const next = require('next')
// const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = routes.getRequestHandler(app)
const handle = app.getRequestHandler(ap)

app.prepare().then(_ => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000
  server.listen(port, e => {
    e && console.log(e)
    console.log(`Server is listening on port ${port}`)
  })
})
