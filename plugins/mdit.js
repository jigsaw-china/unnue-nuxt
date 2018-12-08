import mdit from 'markdown-it'
import mila from 'markdown-it-link-attributes'
import hljs from '~/plugins/hljs'

export default (content, htmled = false) => mdit({
  html: htmled, // 是否解析html
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + mdit().utils.escapeHtml(str) + '</code></pre>';
  }
}).use(mila, { // nofollow
  attrs: {
    target: '_blank',
    rel: 'external nofollow noopener'
  }
}).render(content)
