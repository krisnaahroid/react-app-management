require('babel-register')()

const jsdom = require('jsdom')

const { JSDOM }    = jsdom
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window

global.document = document
global.window   = document.defaultView

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

global.sinon    = require('sinon')
global.chai     = require('chai')

global.expect   = global.chai.expect
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
