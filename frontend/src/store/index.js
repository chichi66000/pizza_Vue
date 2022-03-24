import { createStore } from 'vuex'
import axiosInstance from '../../axios'

export default createStore({
  state: {
    pizzas: [],
    desserts: [],
    boissons: [],
    entrees: []
  },
  getters: {

  },
  mutations: {
    getPizzas (state, pizzas) {
      state.pizzas += pizzas
    },
  },
  actions: {
    getListPizzas ({commit}) {
      axiosInstance
      .get('/products/pizza')
      .then(response => {
        console.log("this pizz ", response.data.pizza);
        commit('getPizzas', response.data.pizza);
        // console.log("this ", this.pizza);     // OK
      })
    }
  },
  modules: {
  }
})
