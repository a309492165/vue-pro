import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    loginState:0
  },
  getters: {
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    },
    removeToken (state) {
      state.token = null
      sessionStorage.removeItem('token')
    }
  },
  modules: { }
})

export default store