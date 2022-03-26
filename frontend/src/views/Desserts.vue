<template>
  <div>
    Desserts
    <!-- list des boissons -->
    <div class="flex flex-row flex-wrap">
      <li class="bordered p-2 rounded-md mx-1 " v-for="dessert in desserts" :key="dessert.id">{{dessert.name}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Desserts',
  data () {
    return {desserts: []}
  },

  mounted(){
    this.desserts = this.$store.getters['listDesserts'];
    console.log("dd ", this.desserts);
  },
}
</script>