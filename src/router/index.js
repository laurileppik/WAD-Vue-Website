import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ContactUsView from '../views/ContactUsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },{
    path: '/signup',
    name: 'signup',
    component: SignupView
  },{
    path: '/login',
    name: 'login',
    component: LoginView
  },{
    path: '/contact',
    name: 'contact',
    component: ContactUsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
