import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/pages/Login'
import Success from "../components/pages/Success";
import Register from "../components/pages/Register";
import Index from "../components/pages/Index";
import ForgetPassword from "../components/pages/ForgetPassword";
import MailCheckCode from "../components/pages/MailCheckCode";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/mailCheckCode',
      name: 'MailCheckCode',
      component: MailCheckCode
    }
  ]
})
