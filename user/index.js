const Demo = require('../dist/demo')
require('../dist/demo.chemo')

const demo = new Demo({ name: 'chemo' })

// demo.setBase('../dist/')
demo.render()
