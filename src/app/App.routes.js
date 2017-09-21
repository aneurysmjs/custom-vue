import Vue from 'vue';
import Router from 'vue-router';
const CHome = () => import('pages/CHome/CHome');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: CHome
    }
  ]
});