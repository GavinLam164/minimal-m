
const next = require('next')
const express = require('express')
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
const devProxy = {
'/api': {
    target: 'http://localhost:8201',
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true,
    logLevel: 'debug',
    secure: false
}
}
  Object.keys(devProxy).forEach(context => {
    server.use(proxyMiddleware(context, devProxy[context]))
  })

server.get('*', (req,res) => handler(req,res))

await server.listen(3001)
console.log('sucess: 3001')
})()