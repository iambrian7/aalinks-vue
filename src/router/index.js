import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/meetings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/meetings',
      name: 'Meetings',
      component: Meetings
    }
  ]
})
