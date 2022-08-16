<template>
  <section
    class="content-wrapper discover-apis welcome-section"
    :style="{
      backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
    }"
  >
    <div class="wrapper">
      <div class="col" v-html="introduction?.heading" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  introduction: Object
});
</script>

<style lang="scss" scoped></style>
