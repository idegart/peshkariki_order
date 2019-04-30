import Vue from 'vue'
import store from './store/store'

import VueMask from 'v-mask'
Vue.use(VueMask);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

window.PHONE_MASK = '+7(###)###-##-##';
window.BASE_URL = 'https://alt6.peshkariki.ru/'

import OrderComponent from './OrderComponent'

new Vue({
  store,
  render: h => h(OrderComponent)
}).$mount('#order')
