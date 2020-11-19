import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EimtOnOff from '@/components/eimtOnOff'
import PageAPI from '@/components/apiPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/eimtOnOff',
      name: 'EimtOnOff',
      component: EimtOnOff
    },
    {
      path: '/api',
      name: 'PageAPI',
      component: PageAPI
    }
  ]
})
