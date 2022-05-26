<template>
  <header  id="ok" class="w-full h-screen bg-center bg-cover">
    <div    class="flex items-center justify-center w-full h-full">
      <div  class="p-12 text-center bg-opacity-50 rounded-md shadow-lg backdrop-blur bg-aBase">
        <h1 v-editable="blok"
          class="text-2xl font-black leading-loose tracking-wider text-white font-mont lg:text-4xl"
        >
          {{ blok.sambutan }}
          <br />
          <span v-editable="blok" class="text-3xl sm:text-8xl text-aYellow"> {{ blok.title }} </span>
        </h1>
      </div>
    </div>
  </header>
</template>
<style>
header {
  background-image: url("~assets/images/hero.svg");
}
</style>
<script >
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
