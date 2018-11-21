import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import EventFeed from '../components/Event/EventFeed'
import CreateEvent from '../components/Event/CreateEvent'
import Signin from '../components/User/Signin'
import Signup from '../components/User/Signup'
import About from '../components/About'
import Mymessages from '../components/Mymessages'
import Myaccount from '../components/Myaccount'
import Myevents from '../components/Myevents'
import Settings from '../components/Settings'
import GoogleMap from '../components/GoogleMap'
import Faq from '../components/Faq'
import Logout from '../components/User/Logout'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', Name: 'Home', component: Home},
    { path: '/events', Name: 'Events' , component: EventFeed},
    { path: '/event/createevent', Name: 'CreateEvent' , component: CreateEvent },
    { path: '/signup', Name: 'Signup' , component: Signup },
    { path: '/signin', Name: 'Signin' , component: Signin},
    { path: '/about', Name: 'About' , component: About},
    { path: '/mymessages', Name: 'Messages' , component: Mymessages},
    { path: '/myaccount', Name: 'Myaccount' , component: Myaccount},
    { path: '/myevents', Name: 'Myevents' , component: Myevents},
    { path: '/settings', Name: 'Settings' , component: Settings},
    { path: '/googlemap', Name: 'GoogleMap' , component: GoogleMap},
    { path: '/faq', Name: 'Faq', component: Faq},
  ],
  // mode: history
})
