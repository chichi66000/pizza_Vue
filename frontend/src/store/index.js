import { createStore } from 'vuex'
// import axiosInstance from '../../axios'

export default createStore({
  state: {
    pizzas: [],
    desserts: [],
    boissons: [],
    entrees: []
  },
  getters: {
    listPizzas (state) {
      return state.pizzas
    }

  },
  mutations: {
    getPizzas (state, pizzas) {
      state.pizzas = pizzas
    },
    getDrinks (state, drinks) {
      state.boissons = drinks
    },
    getEntrees (state, entrees) {
      state.entrees = entrees
    },
    getDesserts (state, desserts) {
      state.desserts = desserts
    },
  },
  actions: {
    getListPizzas (context, pizzas) {
      context.commit('getPizzas', pizzas)
    },
    getListDrinks (context, drinks) {
      context.commit('getDrinks', drinks)
    },
    getListEntrees (context, entrees) {
      context.commit('getEntrees', entrees)
    },
    getListDesserts (context, desserts) {
      context.commit('getDesserts', desserts)
    },
  },
  modules: {
  }
})
