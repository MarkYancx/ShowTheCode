import Vue from 'vue'
import Router from 'vue-router'
import ComponentCommunication from '@/components/ComponentCommunication'
import Section from '@/ComponentAndCommunication/1PropsAndEmit/Section'
import Article from '@/ComponentAndCommunication/1PropsAndEmit/Article'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'ComponentCommunication',
    component: ComponentCommunication,
    // children: [
    //   {
    //     path: 'propsAndEmit',
    //     component: Section
    //   }
    // ]
  },
  {
    path: '/propsAndEmit',
    name: 'propsAndEmit',
    component: Section,
  },
];
let router = new Router({
  routes,
  mode:"history",
})

export default router;
