import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/meetings'
import addMeeting from '@/components/addmeeting'
import MeetingsList from '@/components/meetinglist'
import TestResponsiveForm from '@/components/TestResponsiveForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/responsiveform',
      name: 'test-reponsive-form',
      component: TestResponsiveForm
    },
     {
      path: '/addmeeting',
      name: 'add-meeting',
      component: addMeeting
    },
     {
      path: '/meetings',
      name: 'Meetings',
      component: Meetings
    },
     {
      path: '/meetinglist',
      name: 'MeetingList',
      component: MeetingsList
    }
  ]
})
