import Vue from 'vue';
import Router from 'vue-router';

const Layout = () => import('./../layouts/Layout');
const Home = () => import('./../components/Home');
const About = () => import('./../components/About');
const Collections = () => import('./../components/Collections');
const Exhibition = () => import('./../components/Exhibition');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.path === '/collections') {
      return;
    }

    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
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
        {
          path: '/collections',
          component: Collections,
          name: 'Collections',
        },
        {
          path: '/exhibitions',
          component: Exhibition,
          name: 'Exhibition',
        },
      ],
    },
  ],
});

export default router;
