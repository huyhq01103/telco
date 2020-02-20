// import { Bar } from '../js/bar.es6'
// const { Foo } = require('../js/foo.cjs')
// require('normalize.css/normalize.css')
// require('../css/main.css')
// require('./page.css')
import './styl.main.styl';
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

console.log(Foo.instance().getValue())
console.log(Bar())
