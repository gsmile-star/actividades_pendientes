import Vue from 'vue'
import { filters } from './helpers/filters';
import { router } from './routes/init'
import {store} from './store/store';
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
