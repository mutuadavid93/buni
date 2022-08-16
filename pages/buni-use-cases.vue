<template>
  <div>
    <section
      class="content-wrapper discover-apis welcome-section"
      :style="{
        backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
      }"
    >
      <div class="wrapper" v-html="introduction?.heading" />
    </section>

    <BuniUseCasesContent :content="content" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const { data } = await useAsyncData("buniusecases", () => GqlBuniusecases());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.buniUseCases?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section[0]
);
const content = computed(
  () => getSection({ payload, name: "content" })?.section
);
</script>

<style lang="scss" scoped></style>
