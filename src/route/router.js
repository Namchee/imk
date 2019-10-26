import Vue from 'vue';
import Router from 'vue-router';

const Layout = () => import('./../layouts/Layout');
const Home = () => import('./../components/Home');
const About = () => import('./../components/About');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'Layout',
      children: [
        {
          path: '/home',
          component: Home,
          name: 'Home',
          alias: '/',
        },
        {
          path: '/about_us',
          component: About,
          name: 'About',
        },
      ],
    },
  ],
});
