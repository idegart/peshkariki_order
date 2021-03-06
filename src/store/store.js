import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import base from './base'
import order from './order'

export default new Vuex.Store({
  modules: {
    base,
    order,
  }
})
