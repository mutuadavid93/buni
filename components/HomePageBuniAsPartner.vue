<template>
  <section
    class="content-wrapper best-partner-section"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="wrapper">
      <h4 class="section-title">Buni as the best partner for your business</h4>
      <div class="col-4">
        <app-card :sources="sources" />
      </div>
    </div>
  </section>
</template>

<script setup>
import bgImage from "@/assets/images/background-2.png";
const props = defineProps({
  buniPartner: { type: Array, default: () => [] }
});
const sources = { ...props.buniPartner };
</script>

<style lang="scss" scoped></style>
