<template>
  <section
    class="content-wrapper welcome-section"
    :style="{
      backgroundImage: `url(${$config.baseUrl}${data.image.data.attributes?.url})`
    }"
  >
    <div class="wrapper">
      <div class="col">
        <div v-html="data?.heading" />
        <a href="#" class="primary-btn">{{ data.button?.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  welcomeData: { type: Object, default: () => {} }
});
const data = { ...props.welcomeData };
</script>

<style lang="scss" scoped></style>
