import Vue from 'vue'
import Router from 'vue-router'
import '../public/public.css'
// import Footer from './components/footer/index';
import '../public/fonticon/iconfont.css';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ' Buy',
      component: () => import('./components/text/buy.vue')
    },
    {
      path: '/footer',
      name: ' Footer',
      component: () => import('./components/footer/index.vue')
    },
    {
      path: '/more',
      name: 'More',
      component: () => import('./components/text/more.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('./components/text/list.vue')
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: () => import('./components/text/shopping.vue')
    }
  ]
})
