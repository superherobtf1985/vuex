import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello from Vuex!!!',
    counter: 0,
    cartItems: ['お肉', 'おさかな', 'リンゴ', 'みかん'],
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    }
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 1000)
    }
  },
  modules: {
  }
})
