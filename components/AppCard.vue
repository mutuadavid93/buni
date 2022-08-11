<template>
  <div class="card" v-for="source in sources" :key="source.id">
    <div class="card-header">
      <img
        :src="$config.baseUrl + '' + source.image.data.attributes?.url"
        alt="Sandbox for your innovation"
      />
    </div>
    <div class="card-content" v-html="source?.heading" />
  </div>
</template>

<script setup>
defineProps({
  sources: Array | Object
});
</script>

<style lang="scss" scoped></style>
