import Vue from 'vue'
import Vuex from 'vuex'

import films from '../store/film'
import starships from '../store/starships'
import vehicles from '../store/vehicle'

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
    starships,
    vehicles
  }
})
