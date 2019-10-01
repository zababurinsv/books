const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const templatePath = './src/template.html'
const setupDevServer = require('./build/setup-dev-server')

const port = 8887
const isProd = process.env.NODE_ENV === 'production'

const app = express()

let renderer, readyPromise
if (isProd) {
  console.log('isDev')
  renderer = createBundleRenderer(serverBundle, { 
    runInNewContext: false, 
    template: fs.readFileSync(templatePath, 'utf-8'), 
    clientManifest
  })
} else {
  console.log('isDev')
  readyPromise = setupDevServer( app, templatePath, (bundle, options) => {
      renderer = createBundleRenderer(bundle, options)
    }
  )
}

function render (req, res) {
  console.log(req.url)
  const context = {
    url: req.url
  }

  renderer.renderToString(context)
    .then(html => {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end(html)
    })
    .catch(err => {
      console.log('500 ERROR: ', err)
      res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
      res.end('500 ERROR')
    })
}

app.use(favicon('./public/favicon.ico'))

app.use('/public', express.static(__dirname + '/public'));
app.use('/dist', express.static(path.resolve(__dirname, './dist')))

app.get('*', isProd ? render : (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log('received a request')
  readyPromise.then(() => render(req, res))
})

app.listen(port, () => {
  console.log(`server started at ${port}`)
})