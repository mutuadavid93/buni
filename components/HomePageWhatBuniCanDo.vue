<template>
  <section class="content-wrapper what-can-we-do-section">
    <div class="wrapper">
      <h2 class="section-title">What Can Buni Do?</h2>

      <div class="col-2">
        <div class="card" v-for="source in sources" :key="source.id">
          <div class="card-header">
            <img
              :src="$config.baseUrl + '' + source.image.data.attributes?.url"
              alt="Move money with ease"
            />
          </div>
          <div class="card-content">
            <div class="card-content-details" v-html="source?.heading" />
            <a href="#" class="primary-btn">{{ source.button?.label }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  buniDefinition: { type: Array, default: () => [] }
});
const sources = { ...props.buniDefinition };
</script>

<style lang="scss" scoped></style>
