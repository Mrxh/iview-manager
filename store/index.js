import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    map
  },
  actions: {
    // nuxtServerInit({ commit }, { req }) {
    //   if (req.session.user) {
    //     commit('city', req.session.user)
    //   }
    // }
  }
})

export default store

