import 'regenerator-runtime/runtime';
import Toasted from 'vue-toasted';
import Vue from 'vue';
import router from './route/router';

import Index from './Index.vue';

Vue.use(Toasted);

new Vue({
  router,
  render: h => h(Index),
}).$mount('#app');
