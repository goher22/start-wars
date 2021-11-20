import Vue from 'vue'
import Vuex from 'vuex'

import films from '../store/film'
import setstarships from '../store/starships'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    films,
    setstarships
  }
})
