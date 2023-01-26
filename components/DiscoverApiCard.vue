<template>
  <div class="col-2">
    <div class="card" v-for="api in level" :key="api.id">
      <div class="card-header">
        <img
          :src="$config.baseUrl + '' + api.image.data.attributes?.url"
          alt="Send money"
        />
      </div>
      <div class="card-content">
        <div v-html="api?.heading" />
        <div class="col">
          <a
            v-if="!!api.button?.isexternal"
            target="_blank"
            :href="api.button?.href ? api.button?.href : '#'"
            class="primary-btn"
            >{{ api.button?.label }}</a
          >
          <NuxtLink
            v-else
            :to="api.button?.href ? api.button?.href : '/'"
            class="primary-btn"
            >{{ api.button?.label }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ level: { type: Array, default: () => [] } });
</script>

<style lang="scss" scoped></style>
