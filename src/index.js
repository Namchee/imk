import 'regenerator-runtime/runtime';
import Vue from 'vue';
import router from './route/router';

import Index from './Index.vue';

new Vue({
  router,
  render: h => h(Index),
}).$mount('#app');
