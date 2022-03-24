<template>
  <div>
    <div class="container my-5 flex flex-row flex-wrap justify-between">
      <div class="text-center mx-auto my-2 ">
        <img class="w-full h-52" src="https://www.ofourabois.fr/static/img/best_pizza_02.b910b36.jpg" alt="image pizza home page">
        <h3 class="font-weight-bolder text-red-500 text-xl bg-gray-200 p-2 capitalize">
          Pizza au feu de bois
        </h3>
      </div>

      <div class="text-center mx-auto my-2 ">
        <img class="w-full h-52" src="https://img.myloview.fr/images/pizzeria-livraison-pizza-scooter-400-2191800.jpg" alt="image pizza livraison">
        <h1 class="font-weight-bolder text-red-500 text-xl bg-green-200 p-2 uppercase">
          Livraison à domicile
        </h1>
      </div>

      <div to="/promo" class="text-center mx-auto my-2 ">
        <router-link to="/promo">
          <img class="w-full h-52" src="https://web-pizza.fr/wp-content/uploads/2020/02/delicious-pizza-with-tomatoes-mushrooms-and-Y47PGQU-scaled.jpg" alt="image pizza promo 2achetés 1 offert">
          <h3 class="font-weight-bolder text-red-500 text-xl bg-yellow-200 p-2 italic">
            Promo 2 achetés 1 offert
          </h3>
        </router-link>
      </div>
    </div>

    <div class="mx-auto text-center ">
      <router-link to="/pizza" class="btn bg-green-500 p-2 mx-ato rounded-md hover:bg-green-700 hover:text-white">
        Commander maintenant
      </router-link>
    </div>
    <div v-for="pizza in pizzas" :key="pizza.name">
      <li>{{pizza.name}}</li>
    </div>
  </div>
</template>

<script>
// import Panier from '../components/Panier.vue'
// import MenuPromo from '../components/MenuPromo.vue'
// import axiosInstance from '../../axios'

export default {
  name: 'Home',
  data () {
    return {
      pizzas: []
    }
  },
  created () {
    // axiosInstance
    //   .get('/products/pizza')
    //   .then(response => {
    //     this.pizzas = response.data.pizzas
    //     console.log("this ", this.pizza);     // OK
    //   })
    this.$store.dispatch('getListPizzas');
  }
}
</script>
