<template>
  <div>
    <DiscoverAPIsIntro :introduction="introduction" />
    <DiscoverAPIs :level1="level1" :level2="level2" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const { data } = await useAsyncData("discoverapis", () => GqlDiscoverapis());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.discoverApis?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section[0]
);
const level1 = computed(() => getSection({ payload, name: "level1" })?.section);
const level2 = computed(() => getSection({ payload, name: "level2" })?.section);
</script>

<style lang="scss" scoped></style>
