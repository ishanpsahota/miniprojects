import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
// import { createPopper } from '@popperjs/core'


Vue.config.productionTip = false;

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(PortalVue)
// Vue.use(createPopper)

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@popperjs/core'
import 'jquery'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
