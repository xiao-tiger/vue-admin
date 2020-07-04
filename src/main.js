import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index.js'

Vue.config.productionTip = false

// 导入全局配置项
import conf from './common/config/config.js';
Vue.prototype.$conf = conf;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
