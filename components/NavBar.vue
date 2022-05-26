<template>
  <nav class="fixed top-0 z-50 w-full p-2 text-lg font-bold md:px-16 font-mont text-aTosca">
    <div
      class="container px-6 py-2 mx-auto rounded-lg shadow bg-opacity-70 md:flex md:justify-between md:items-center bg-aDark backdrop-blur-md filter">
      <div class="flex items-center justify-between">
        <div>
          <a class="text-2xl text-gray-200 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-aYellow "
            href="/">Brand</a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="isShow = !isShow" id="ToggleDiv" type="button"
            class="text-gray-200 0 hover:text-aYellow focus:outline-none" aria-label="toggle menu">
            <svg v-if="isShow" id="buka" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor" v-else>
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div class="items-center hidden md:flex">
        <div class="flex flex-col py-8 space-y-2 md:py-0 md:space-y-0 md:flex-row md:mx-6">
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/">Home</nuxt-link>
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/artikel">Artikel</nuxt-link>
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/galeri">Galeri</nuxt-link>

        </div>


      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex" v-if="isShow">
        <div class="flex flex-col py-8 space-y-2 md:py-0 md:space-y-0 md:flex-row md:mx-6">
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/">Home</nuxt-link>
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/artikel">Artikel</nuxt-link>
          <nuxt-link
            class="w-full px-3 py-2 my-2 text-gray-200 transition-colors duration-100 transform rounded-md hover:bg-aDark hover:text-aYellow md:mx-4 md:my-0"
            to="/galeri">Galeri</nuxt-link>
        </div>

       
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style>
a.nuxt-link-exact-active {
  background-color: #083358;
  color: #ffd717;

}
</style>
