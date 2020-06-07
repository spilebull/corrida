import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

interface State {
  counter: number
  message: string
}

export default new Vuex.Store({
  state: {
    counter: 0,
    message: ''
  } as State,
  getters: {
    getCounter: (state, getters) => () => {
      return state.counter
    },
    getMessage: (state, getters) => () => {
      return state.message
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter += 1
    },
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    incrementAction(context) {
      context.commit('increment')
    },
    async getMessageAction(context) {
      const msg = await axios.get('http://localhost:3000').then(
        (res: any) => res.data,
        () => ''
      )
      const payload = {
        message: msg
      }
      context.commit('setMessage', payload)
    }
  },
  modules: {}
})
