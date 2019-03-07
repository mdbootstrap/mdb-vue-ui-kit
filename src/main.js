// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
