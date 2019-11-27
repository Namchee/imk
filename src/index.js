import 'regenerator-runtime/runtime';
import Toasted from 'vue-toasted';
import Vue from 'vue';
import router from './route/router';
import Vuei18n from 'vue-i18n';
import translation from './resources/translation/translate.json';

import Index from './Index.vue';

Vue.use(Vuei18n);
Vue.use(Toasted);

export const i18n = new Vuei18n({
  locale: 'id',
  fallbackLocale: 'id',
  messages: translation,
});

new Vue({
  router,
  render: h => h(Index),
  i18n,
}).$mount('#app');
