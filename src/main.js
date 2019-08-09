import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Public from '../public/public.css'
import {BackTop} from 'ant-design-vue';
import {Carousel} from 'ant-design-vue';
// import {Rate} from 'ant-design-vue';
Vue.component(BackTop.name,BackTop);
// Vue.component(Rate.name,Rate);
Vue.component(Carousel.name,Carousel);
Vue.config.productionTip = false;
new Vue({
  router,
  Public,
  store,
  render: h => h(App)
}).$mount('#app')
