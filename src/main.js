import Vue from 'vue';
import 'normalize.css';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import '@/styles';
import buildInfo from '@/build-info';

Vue.config.productionTip = false;

const element = new Image();
Object.defineProperties(element, {
  id: {
    get() {
      setTimeout(() => {
        console.log(buildInfo);
      }, 0);
      return '';
    },
  },
});
console.log(element);
console.clear();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
