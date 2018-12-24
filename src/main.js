// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource';
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'


Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VCalendar, {
  firstDayOfWeek: 2,  // Monday
});
Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable yes-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
