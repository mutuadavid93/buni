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

        <a
          v-if="!!data.button?.isexternal"
          target="_blank"
          :href="data.button?.href ? data.button?.href : '/'"
          class="primary-btn"
          >{{ data.button?.label }}</a
        >
        <NuxtLink
          v-else
          :to="data.button?.href ? data.button?.href : '/'"
          class="primary-btn"
          >{{ data.button?.label }}</NuxtLink
        >
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
