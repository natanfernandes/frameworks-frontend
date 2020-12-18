import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import VueRouter from 'vue-router'
import {routes} from './routes';

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
