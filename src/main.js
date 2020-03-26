import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

// Axios.defaults.headers.common['avatar'] = store.state.avatar;

//时间过滤器
Vue.filter("time", function(value, formatString) {
  formatString = formatString || "YYYY-MM-DD HH:mm";
  return moment(value).format(formatString);
});

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
