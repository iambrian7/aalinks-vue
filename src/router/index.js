import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/meetings'
import addSimpleMeeting from '@/components/addSimpleMeeting'
import addMeeting from '@/components/addmeeting'
import MeetingsList from '@/components/meetinglist'
//import ResponsiveForm from '@/components/acmeform'
import TestResponsiveForm from '@/components/TestResponsiveForm'
import Donate from '@/components/DonateVue'
import AMeeting from '@/components/ameeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
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
      path: '/ameeting',
      name: 'ameeting',
      component: AMeeting,
      props: true
    },
     {
      path: '/meetinglist',
      name: 'MeetingList',
      component: MeetingsList
    }
  ]
})
