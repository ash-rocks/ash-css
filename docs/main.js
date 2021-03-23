import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueHeadful from 'vue-headful'
import Site from './layouts/Site.vue'
import Docs from './layouts/Docs.vue'

import Prism from 'prismjs'
require('prismjs/plugins/toolbar/prism-toolbar')
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')
require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')

Vue.component('vue-headful', vueHeadful)

const VuePrism = {
  install (Vue, options) {
    Vue.mixin({
      mounted () {
        Prism.plugins.NormalizeWhitespace.setDefaults({
          'remove-trailing': true,
          'remove-indent': true,
          'left-trim': false,
          'right-trim': true,
          'remove-initial-line-feed': true,
          'tabs-to-spaces': 2,
          'spaces-to-tabs': 2
        })
        Prism.highlightAll()
      }
    })
  }
}

Vue.use(VuePrism)

Vue.component('site-layout', Site)
Vue.component('docs-layout', Docs)

if (process.env.NODE_ENV === 'development') {
  require('../ash/ash.less')
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
