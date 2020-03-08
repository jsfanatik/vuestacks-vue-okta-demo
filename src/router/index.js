import Vue from 'vue'
import VueRouter from 'vue-router'
import LoggedOut from '@/components/LoggedOut'
import LoggedIn from '@/components/LoggedIn'
// import HomePage from '@/components/HomePage'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-785713.okta.com/oauth2/default',
  client_id: '0oaswl6gNSLlvxTNb4x5',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/loggedout',
    name: 'LoggedOut',
    component: LoggedOut
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    path:'/',
    name: 'Loggedin',
    component: LoggedIn,
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path:'/homepage',
  //   name: 'HomePage',
  //   component: HomePage,
  //   meta: {
  //     requiresAuth: true
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
