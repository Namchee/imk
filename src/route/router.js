import Vue from 'vue';
import Router from 'vue-router';
import Collections from './../components/Collections';

const Layout = () => import('./../layouts/Layout');
const Home = () => import('./../components/Home');
const About = () => import('./../components/About');
const Exhibition = () => import('./../components/Exhibition');
const PageNotFound = () => import('./../components/404');

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
          meta: {
            title: '',
          },
        },
        {
          path: '/about_us',
          component: About,
          name: 'About',
          meta: {
            title: 'About Us',
          },
        },
        {
          path: '/collections',
          component: Collections,
          name: 'Collections',
          meta: {
            title: 'Collections',
          },
        },
        {
          path: '/exhibitions',
          component: Exhibition,
          name: 'Exhibition',
          meta: {
            title: 'Exhibitions',
          },
        },
        {
          path: '*',
          redirect: {
            name: 'PageNotFound',
          },
        },
      ],
    },
    {
      path: '/404',
      component: PageNotFound,
      name: 'PageNotFound',
      meta: {
        title: 'Page Not Found!',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title) ? (to.meta.title + ' - Roemah Seni Sarasvati') : 'Roemah Seni Sarasvati';
  next();
});

export default router;
