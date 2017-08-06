// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import NotFound from './components/404'
import  store from './store'
import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: "log-time",
    //LogTime属于我们TimeEntries组件的一个子路由，所以我们依旧需要配置下我们的路由，并且利用webpack让它懒加载，减少我们首屏加载的流量
    component: resolve => require(['./components/LogTime'], resolve)
  }]
},{
  path:'*',
  component : NotFound
}];

const  router = new VueRouter({
  routes
});

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
