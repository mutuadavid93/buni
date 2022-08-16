<template>
  <section class="content-wrapper api what-can-we-do-section">
    <div class="wrapper">
      <h2 class="section-title">APIs</h2>
      <DiscoverApiCard :level="level1" />
      <DiscoverApiCard :level="level2" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  level1: { type: Array, default: () => [] },
  level2: { type: Array, default: () => [] }
});
</script>

<style lang="scss" scoped></style>
