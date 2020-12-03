import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueHeadful from 'vue-headful'
import Prism from 'prismjs'

Vue.component('vue-headful', vueHeadful)

const VuePrism = {
  install (Vue, options) {

    Vue.mixin({
      mounted () {
        Prism.highlightAll()
      }
    })
  }
}

Vue.use(VuePrism)

import Site from './layouts/Site.vue'
import Docs from './layouts/Docs.vue'

Vue.component('site-layout', Site)
Vue.component('docs-layout', Docs)

if (process.env.NODE_ENV == 'development') {
  require('../ash/ash.less')
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
