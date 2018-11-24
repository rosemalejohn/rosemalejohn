import Vue from 'vue';
import App from './App.vue';
// import VueAnalytics from 'vue-analytics'
import './registerServiceWorker';

Vue.config.productionTip = false;

// plugins
const VueAnalytics = require('vue-analytics');
Vue.use(VueAnalytics, {
  id: 'UA-124624613-1',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
