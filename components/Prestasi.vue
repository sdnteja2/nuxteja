<template>
  <section class="justify-center w-full text-aBase bg-aYellow">
    <div class="px-2 py-20 sm:px-16">
      <h1
        class="text-4xl font-black tracking-wide text-center font-mont sm:text-6xl"
      >
        {{ blok.title }}
      </h1>
      <h2
        class="text-2xl font-black text-center uppercase text-aDark sm:text-3xl"
      >
        {{ blok.subtitle }}
      </h2>
      <section v-if="blok.prestasi_list.length > 0" class="text-aBase">
        <component
          v-for="prestasi in blok.prestasi_list"
          :key="prestasi._uid"
          :is="prestasi.component"
          :blok="prestasi"
        />
      </section>
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
