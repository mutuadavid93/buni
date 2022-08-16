<template>
  <section class="content-wrapper buni-use-cases-section">
    <div class="wrapper">
      <div v-for="cnt in content" :key="cnt.id" :class="cnt.button?.classname">
        <div class="text-copy" v-html="cnt?.heading" />
        <div class="copy-image">
          <img
            :src="$config.baseUrl + '' + cnt.image.data.attributes?.url"
            alt="Connect to our Ecosystem"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>
