// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';


import jQuery from 'jquery'

global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VeeValidate);
 // register
 Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
Vue.config.productionTip = false
export const Bus = new Vue() // This empty Vue model will serve as our event bus.
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
