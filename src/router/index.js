import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/meetings'
import addSimpleMeeting from '@/components/addSimpleMeeting'
import addMeeting from '@/components/addmeeting'
import MeetingsList from '@/components/meetinglist'
import TestResponsiveForm from '@/components/TestResponsiveForm'
//import ResponsiveForm from '@/components/acmeform'

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
      name: 'contactform',
      component: TestResponsiveForm
    },
     {
      path: '/addmeeting',
      name: 'add-meeting',
     component: addSimpleMeeting
    //  component: addMeeting
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
