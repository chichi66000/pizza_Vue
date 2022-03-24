<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
export default {
  name:'Index',
  components: { Navbar}
}
</script>
<style lang="scss">

</style>
