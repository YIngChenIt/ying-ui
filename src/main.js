import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import yingUi from './packages/index'

Vue.use(yingUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
