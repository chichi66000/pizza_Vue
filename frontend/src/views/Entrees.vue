<template>
  <div>
    entrees
    <!-- list des boissons -->
    <div class="flex flex-row flex-wrap">
      <li class="bordered p-2 rounded-md mx-1 " v-for="entree in entrees" :key="entree.id">{{entree.name}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entrees',
  data () {
    return {entrees: []}
  },

  mounted(){
    this.entrees = this.$store.getters['listEntrees'];
    // console.log("dd ", this.entrees);
  },
}
</script>