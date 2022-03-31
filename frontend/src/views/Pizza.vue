<template>
  <div class="container grid grid-cols-12 md:grid-cols-6 gap-2 my-2 relative">
    <!-- list des pizzas -->
    <div class="md:col-span-4 col-start-1 flex flex-row flex-wrap ">
      <li class="border-1 rounded-md m-1 p-2 rounded-md mx-1 w-1/4 " v-for="(pizza, index) in pizzas" :key="pizza.id">
        <img class="w-full" :src="`${pizza.imgSrc}`" :alt="`pizza ${pizza.name}` " />
        <p class="text-sm">{{pizza.ingrédients}}</p>
        
        <select @change="getValue($event, index)" v-model="price"  class="" >
          <option disabled selected>Choissiez la taille</option>
          <option  v-for="(taille) in pizza.taille" :key="taille" v-bind:value="taille" class="p-2">{{taille}} </option>
        </select>
        <button @click="addPizzaToCart(index)" class="btn rounded-md bg-green-500 p-2 text-center mx-auto flex flex-wrap justify-between">
          <span>Ajouter</span>
          <span :id="`prix_${pizza.id}`"  class="ml-2"></span>
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
      // selected: "moyen",
      price: 0,
      // taille: ""
    }
  },
  // created () {
  //   this.getValue()
  // },
  // mounted(){
  //   // this.pizzas = this.$store.getters['listPizzas'];
  //   console.log("tt ", this.selectTaille);
  // },
  computed : {
    ...mapGetters({pizzas:'listPizzas', commande: 'getPrixPizza'})
  },
  methods : {

    // changer le prix selon la taille du pizza
    async getValue (event, index) {
      // console.log("pizzas ", this.pizzas);    //OK
      let taille = event.target.value;
      let prixSpan = document.getElementById(`prix_${this.pizzas[index].id}`)
      // afficher le prix selon la taille
      if (taille === "moyen") {
        this.prix = this.pizzas[index].prix[0]
        // console.log("prix ", this.prix);    //OK
      }
      else {
        this.prix = this.pizzas[index].prix[1]
      }
      // afficher le prix dans HTML
      prixSpan.innerHTML = this.prix
      this.price = this.prix
    },

    // addPizzaToCart(index)
    async addPizzaToCart(index) {
      console.log("pizza name ", `${this.pizzas[index].name}`);
      console.log("this.price ", this.prix);
      let piz = {
        'nom': `${this.pizzas[index].name}`, 
        'prix': this.prix
      }
      console.log("piz ", piz);
      this.$store.dispatch('getPrixPizza', piz)
      console.log("commande ", this.commande);
      this.$store.dispatch('getPrixTotal', this.prix)
    }
  }
}
</script>
