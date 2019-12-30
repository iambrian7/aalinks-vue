// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Vuex from 'vuex'
import App from './App'
import router from './router'
// import VeeValidate from 'vee-validate';
//import { StripeCheckout } from 'vue-stripe'

import store from './store/store'
//Vue.use(Vuex)

// import jQuery from 'jquery'

// global.jQuery = jQuery
// global.$ = jQuery
// let Bootstrap = require('bootstrap')
// import 'bootstrap/dist/css/bootstrap.css'
// Vue.use(VeeValidate);
//  // register
//  Vue.component('my-component', {
//   template: '<div>A custom component!</div>'
// })
//Vue.component('stripe-checkout', StripeCheckout);

Vue.config.productionTip = false

// export const Bus = new Vue() // This empty Vue model will serve as our event bus.
/* eslint-disable no-new */
// new Vue({
//   router,
//   store,
//   render: (h) => h("frame", [h(App)]),
//   created() {
//     this.$store.dispatch("getStripeKey");
//   },
// }).$start();

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  async created() {
    console.log("before dispatch getStripeKey");
    await this.$store.dispatch("getStripeKey");
    console.log("after dispatch getStripeKey");
  },
})
