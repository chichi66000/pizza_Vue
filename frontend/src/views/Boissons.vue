<template>
  <div>
    <h5>Boisson</h5>
    <!-- list des boissons -->
    <div class="flex flex-row flex-wrap">
      <li class="bordered p-2 rounded-md mx-1 " v-for="boisson in boissons" :key="boisson.id">{{boisson.name}}</li>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Boissons',
  data () {
    return {boissons: []}
  },

  mounted(){
    this.boissons = this.$store.getters['listBoissons'];
    console.log("bb ", this.boissons);
  },
}
</script>