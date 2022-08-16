<template>
  <BuniUseCasesContent :content="content" />
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
