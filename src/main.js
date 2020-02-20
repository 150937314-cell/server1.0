import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index"
//1.引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//2.引入全局样式
import "./style/common.less"

//3.引入vant组件库
import "./plugins/vant"
//4.引入rem
import "@/config/rem"
//5.引入全局过滤器
import "@/config/filter"

//1.引入fastclick
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import FastClick from "fastclick"
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')