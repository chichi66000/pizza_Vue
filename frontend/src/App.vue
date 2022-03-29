<template>
  <div class="">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import axiosInstance from '../axios'

export default {
  name:'Index',
  components: { Navbar, Footer},
  created () {
    axiosInstance
      .get('/products/pizza')
      .then(response => {
        // console.log("this pizz ", response.data.pizzas);
        // console.log("this ", this.pizza);     // OK
        this.$store.dispatch('getListPizzas', response.data.pizzas);
        this.$store.dispatch('getListDrinks', response.data.boissons);
        this.$store.dispatch('getListEntrees', response.data.entrees);
        this.$store.dispatch('getListDesserts', response.data.desserts);
      })
    
  }
}
</script>
<style lang="scss">

</style>
