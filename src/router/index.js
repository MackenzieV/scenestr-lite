import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import EventFeed from '../components/Event/EventFeed'
import CreateEvent from '../components/Event/CreateEvent'
import Profile from '../components/User/Profile'
import Signin from '../components/User/Signin'
import Signup from '../components/User/Signup'
import About from '../components/About'
import Messages from '../components/Messages'
import Myaccount from '../components/Myaccount'
import Myevents from '../components/Myevents'
import Settings from '../components/Settings'
import GoogleMap from '../components/GoogleMap'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', Name: 'Home', component: Home},
    { path: '/events', Name: 'Events' , component: EventFeed},
    { path: '/event/new', Name: 'CreateEvent' , component: CreateEvent },
    { path: '/profile', Name: 'Profile' , component: Profile },
    { path: '/signup', Name: 'Signup' , component: Signup },
    { path: '/signin', Name: 'Signin' , component: Signin},
    { path: '/about', Name: 'About' , component: About},
    { path: '/messages', Name: 'Messages' , component: Messages},
    { path: '/myaccount', Name: 'Myaccount' , component: Myaccount},
    { path: '/myevents', Name: 'Myevents' , component: Myevents},
    { path: '/settings', Name: 'Settings' , component: Settings},
    { path: '/googlemap', Name: 'GoogleMap' , component: GoogleMap},
  ],
  // mode: history
})
