// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入element-ui组件
import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import

// 引入axios
import axios from 'axios'
// 用qs处理参数
import qs from 'qs'

import App from './App'
import router from './router'

// 引入Select组件
import {Select, Option} from 'element-ui'

// 使用elememt组件
Vue.use(ElementUI) //新添加3

// 使用select组件
Vue.use(Select)
Vue.use(Option)

// 使用axios组件
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
