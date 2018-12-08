/*
 *
 * 代码高亮
 *
*/

const hljs = require('highlight.js/lib/highlight')

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'))
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
hljs.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))

export default hljs
