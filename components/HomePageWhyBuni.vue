<template>
  <section class="content-wrapper why-buni-section">
    <div class="wrapper">
      <h3 class="section-title">Why Buni?</h3>
      <div class="col-3">
        <app-card :sources="sources" />
      </div>
      <a href="#" class="primary-btn">VIEW DOCS</a>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  buniPurpose: { type: Array, default: () => [] }
});
const sources = { ...props.buniPurpose };
</script>

<style lang="scss" scoped></style>
