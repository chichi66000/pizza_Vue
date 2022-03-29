<template>
  <div class="container grid grid-cols-12 md:grid-cols-6 gap-2 my-2 relative">
    <!-- list des pizzas -->
    <div class="md:col-span-4 col-start-1 flex flex-row flex-wrap ">
      <li class="border-1 rounded-md m-1 p-2 rounded-md mx-1 w-1/4 " v-for="pizza in pizzas" :key="pizza.id">
        <img class="w-full" :src="`${pizza.imgSrc}`" :alt="`pizza ${pizza.name}` " />
        <p class="text-sm">{{pizza.ingrédients}}</p>
        <select v-model="pizza.taille" @change="changePrice(e)" class="" >
          <option   v-for="(size, index) in pizza.taille" :key="`size_${index}`" :value="`${size}`" >{{size}}</option>
        </select>
        <button class="btn rounded-md bg-green-500 p-2 text-center mx-auto flex flex-wrap justify-between">
          <span>Ajouter</span>
          <span class="">{{pizza.prix}}</span>
        </button>
      </li>
    </div>

    <!-- Panier à droite -->
    <Panier class="md:col-span-2 col-start-5 col-end-6 border-2 border-gray-200 rounded-md hidden md:block  h-screen" />
    
  </div>
</template>

<script>
 import { mapGetters } from 'vuex'
import Panier from './Panier.vue'

export default {
  name: 'Pizza',
  components: {Panier},
  data () {
    return {
      // selectTaille: ''
    }
  },
  // mounted(){
  //   // this.pizzas = this.$store.getters['listPizzas'];
  //   console.log("tt ", this.selectTaille);
  // },
  computed : {
    ...mapGetters({pizzas:'listPizzas'})
  },
  method : {
    changePrice (e) {
      let price = e.target.value;
      console.log("price ", price);
    }
  }
}
</script>
