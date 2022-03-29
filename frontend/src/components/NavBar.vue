<template>
  <div class="">
    <nav id="navbar" class="grid grid-cols-12">
      <div class="col-span-4 md:col-span-1 mr-2 ">
        <img src="https://img.pixers.pics/pho_wat(s3:700/FO/31/28/89/28/700_FO31288928_9d85e8db54bd67a904b9617796518e37.jpg,700,697,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,483,650,jpg)/posters-pizzaiolo-vecteur.jpg.jpg" alf="logo pizza" class="w-16 md:w-12">
      </div>
      <button id="toggleButton" class="btn cols-span-1 col-start-9 ml-2 w-10 h-10 sm:hidden bg-green-500 text-black hover:text-gray-500 p-1 m-2 rounded rounded-md" @click="isOpen=!isOpen">
        <span class="md:display-none">
          <i class="fa-solid fa-bars"></i>
        </span>
      </button>
      <ul class="bg-green-500 col-span-8 sm:col-span-11 col-start-6 sm:col-start-2 place-content-center  flex flex-wrap flex-col sm:flex-row mx-auto justify-between sm:inline-flex w-32 sm:w-full p-2 mb-2 rounded-md" :class="[isOpen ? 'block ' : 'hidden sm:block']">
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/promo">
            Menu 
            <br>& Promo
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/entrees">
            Entrées
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/pizzas">
            Pizzas
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/desserts">
            Desserts
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/boissons">
            Boissons
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md ">
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
        <li class="flex-1 hover:text-white focus:text-white text-md  md:hidden">
          <i class="fa-solid fa-cart-shopping "></i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isOpen: false
    }
  },
  method: {
  }
}
</script>
