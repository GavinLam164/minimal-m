
const next = require('next')
const express = require('express')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3001
const dev = process.env.NODE_ENV !== 'production'
const option = {
  dev
}
const app = next(option)
const handler = app.getRequestHandler()
;(async () => {
  await app.prepare()

  const proxyMiddleware = require('http-proxy-middleware')
  const server = express()
  server.use(cookieParser())
  if(process.NODE_ENV === 'development') {
    const devProxy = {
      '/api': {
          target: 'http://localhost:8201',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true,
          logLevel: 'debug',
          secure: false
      }
    }
    Object.keys(devProxy).forEach(context => {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }
  server.get('*', (req,res) => handler(req,res))
  await server.listen(port)
  console.log('sucess: ', port)
})()