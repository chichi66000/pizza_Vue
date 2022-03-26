<template>
  <div class="container flex flex-col sm:flex-row sm:flex-wrap my-2 ">
    <!-- list des pizzas -->
    <div class="flex flex-row flex-wrap">
      <li class="bordered p-2 rounded-md mx-1 " v-for="pizza in pizzas" :key="pizza.id">{{pizza.name}}</li>
    </div>
  </div>
</template>

<script>
 import { mapGetters } from 'vuex'

export default {
  name: 'Pizza',
  data () {
    // return { pizzas: []}
  },
  computed : {
    ...mapGetters('listPizzas')
  }
}
</script>
