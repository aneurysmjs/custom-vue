import Vue from 'vue';
import App from './app/App';
import router from './app/App.routes';

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
});