import Vue from 'vue';
import Router from 'vue-router';
import Collections from './../components/Collections';
import { i18n } from './../index';

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
    } else if (to.name !== 'Collections') {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/id',
    },
    {
      path: '/404',
      component: PageNotFound,
      name: 'PageNotFound',
      meta: {
        title: 'Page Not Found!',
      },
    },
    {
      path: '/:lang',
      component: Layout,
      name: 'Layout',
      children: [
        {
          path: 'home',
          component: Home,
          name: 'Home',
          alias: '/',
          meta: {
            title: {
              en: '',
              id: '',
            },
          },
        },
        {
          path: 'about_us',
          component: About,
          name: 'About',
          meta: {
            title: {
              en: 'About Us',
              id: 'Tentang Kami',
            },
          },
        },
        {
          path: 'collections',
          component: Collections,
          name: 'Collections',
          meta: {
            title: {
              en: 'Collections',
              id: 'Koleksi Kami',
            },
          },
        },
        {
          path: 'exhibitions',
          component: Exhibition,
          name: 'Exhibition',
          meta: {
            title: {
              en: 'Exhibitions',
              id: 'Pameran',
            },
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
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'PageNotFound') {
    const lang = to.params.lang;

    if (['en', 'id'].includes(lang)) {
      console.log('hai');
      i18n.locale = lang;

      document.title = (to.meta.title[lang]) ?
        (to.meta.title[lang] + ' - Roemah Seni Sarasvati') :
        'Roemah Seni Sarasvati';

      next();
    } else {
      next({ name: 'PageNotFound' });
    }
  } else {
    next();
  }
});

export default router;
