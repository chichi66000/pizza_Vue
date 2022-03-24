<template>
  <div>
    <div class="container my-5 flex flex-row flex-wrap justify-between">
      <div class="text-center mx-auto my-2">
        <img class="w-full h-52" src="https://www.ofourabois.fr/static/img/best_pizza_02.b910b36.jpg" alt="image pizza home page">
        <h3 class="font-weight-bolder text-red-500 text-xl bg-gray-200 p-2 capitalize">
          Pizza au feu de bois
        </h3>
      </div>

      <div class="text-center mx-auto my-2">
        <img class="w-full h-52" src="https://img.myloview.fr/images/pizzeria-livraison-pizza-scooter-400-2191800.jpg" alt="image pizza livraison">
        <h1 class="font-weight-bolder text-red-500 text-xl bg-green-200 p-2 uppercase">
          Livraison à domicile
        </h1>
      </div>

      <div to="/promo" class="text-center mx-auto my-2">
        <nuxt-link to="/promo">
          <img class="w-full h-52" src="https://web-pizza.fr/wp-content/uploads/2020/02/delicious-pizza-with-tomatoes-mushrooms-and-Y47PGQU-scaled.jpg" alt="image pizza promo 2achetés 1 offert">
          <h3 class="font-weight-bolder text-red-500 text-xl bg-yellow-200 p-2 italic">
            Promo 2 achetés 1 offert
          </h3>
        </nuxt-link>
      </div>
    </div>

    <nuxt-link to="/pizza" class="mx-auto">
      <button class="btn bg-green-500 p-2 mx-ato rounded-md hover:bg-green-700 hover:text-white">
        Commander manitenant
      </button>
    </nuxt-link>
  </div>
</template>

<script>
// import Panier from '../components/Panier.vue'
// import MenuPromo from '../components/MenuPromo.vue'
// import axios from 'axios'

export default {
  name: 'IndexPage',
  // async asyncData () {
  //   const p = await axios.get('/products/pizza')
  //   console.log(p)
  // }
  // setup: () {
  //   async getData () {
  //     await this.$axios.get('/products/pizza').then((res) => {
  //       console.log('product ' + res.data)
  //     })
  //   }
  // },
  // methods: {
  // }
}
</script>
