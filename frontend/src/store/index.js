import { createStore } from 'vuex'
// import axiosInstance from '../../axios'

export default createStore({
  state: {
    pizzas: [],
    desserts: [],
    boissons: [],
    entrees: [],
    commande: {
      products: [],
      total: 0
    }
      
    
  },
  getters: {
    listPizzas (state) {
      return state.pizzas
    },
    listBoissons (state) {
      return state.boissons
    },
    listDesserts (state) {
      return state.desserts
    },
    listEntrees (state) {
      return state.entrees
    },
    getPrixPizza (state) {
      return state.commande.products
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
    getPrixPizza (state, pizza) {
      state.commande.products.push(pizza) ;
      
    },
    getPrixTotal (state, prix) {
      state.commande.total += prix
    }
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
    getPrixPizza (context, pizza) {
      context.commit('getPrixPizza', pizza)
    },
    getPrixTotal (context, prix) {
      context.commit('getPrixTotal', prix)
    }
  },
  modules: {
  }
})
