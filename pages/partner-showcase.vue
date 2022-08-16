<template>
  <div>
    <section
      class="content-wrapper discover-apis welcome-section"
      :style="{
        backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
      }"
    >
      <div class="wrapper">
        <div class="col" v-html="introduction?.heading" />
      </div>
    </section>

    <PartnerShowcaseContent :content="content" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const { data } = await useAsyncData("partnershowcase", () =>
  GqlPartnershowcase()
);
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.partnerShowcases?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section[0]
);
const content = computed(
  () => getSection({ payload, name: "content" })?.section
);
</script>

<style lang="scss" scoped></style>
