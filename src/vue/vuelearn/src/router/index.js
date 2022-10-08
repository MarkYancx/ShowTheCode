import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/attrsAndListeners/A.vue'
// import A from '../components/attrsAndListeners'

Vue.use(Router)

const routes = [
  {
    path: '/attrs',
    name: 'A',
    component: A,
  },
 
];
let router = new Router({
  routes,
  mode:"history",
})

export default router;
