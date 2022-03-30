<template>
  <div class="container grid grid-cols-12 md:grid-cols-6 gap-2 my-2 relative">
    <!-- list des pizzas -->
    <div class="md:col-span-4 col-start-1 flex flex-row flex-wrap ">
      <li class="border-1 rounded-md m-1 p-2 rounded-md mx-1 w-1/4 " v-for="(pizza, index) in pizzas" :key="pizza.id">
        <img class="w-full" :src="`${pizza.imgSrc}`" :alt="`pizza ${pizza.name}` " />
        <p class="text-sm">{{pizza.ingrédients}}</p>
        
        <select @change="getValue($event, index)"  class="" >
          <option  v-for="(taille) in pizza.taille" :key="taille"  v-bind:value="taille" class="p-2">{{taille}} </option>
        </select>
        <button @click="addPizza()" class="btn rounded-md bg-green-500 p-2 text-center mx-auto flex flex-wrap justify-between">
          <span>Ajouter</span>
          <span :id="`prix_${pizza.id}_${selected}`" class="ml-2"></span>
        </button>

        <!-- <select @change="getValue($event)" v-model="selected" class="">
          <option v-for="prix in pizza.prix" :key="prix.prix" :value="prix.taille">{{prix.taille}}</option>
        </select>
        <button @click="addPizza()" class="btn rounded-md bg-green-500 p-2 text-center mx-auto flex flex-wrap justify-between">
          <span>Ajouter</span>
          <span v-for="prix in pizza.prix" :key="prix.prix" :value="prix.prix" class="">{{prix.prix}}</span>
        </button> -->
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
      // prix: 0
    }
  },
  // mounted(){
  //   // this.pizzas = this.$store.getters['listPizzas'];
  //   console.log("tt ", this.selectTaille);
  // },
  computed : {
    ...mapGetters({pizzas:'listPizzas'})
  },
  methods : {
    changePrice (e) {
      let price = e.target.value;
      console.log("price ", price);
    },
    getValue (event, index) {
       
      console.log("index ", index);
      // let index = e;
      // console.log("selected ", this.selected);
      console.log("pizzas ", this.pizzas);    //OK
      let taille = event.target.value;
      console.log(taille);
      let prixSpan = document.getElementById(`prix_${this.pizzas[index].id}_${this.selected}`)
      if (taille === "moyen") {
        this.prix = this.pizzas[index].prix[0]
        console.log("prix ", this.prix);
      }
      else {
        this.prix = this.pizzas[index].prix[1]
      }
      prixSpan.innerHTML = this.prix
    }
  }
}
</script>
