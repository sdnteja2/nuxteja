<template>
  <section class="">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <h1 class="text-4xl font-black tracking-wide text-center text-aYellow font-mont sm:text-6xl">
        {{ blok.title }}
      </h1>
      <h1 class="text-2xl font-black text-center text-white uppercase sm:text-3xl">
        {{ blok.subtitle }}
      </h1>

      <div v-if="blok.guru_list.length > 0" class="flex flex-row flex-wrap justify-center mt-8">
        <component v-for="guru in blok.guru_list" :key="guru._uid" :is="guru.component" :blok="guru" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
