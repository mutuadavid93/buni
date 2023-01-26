<template>
  <div>
    <section
      class="content-wrapper support welcome-section"
      :style="{
        backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
      }"
    >
      <div class="wrapper">
        <div class="col">
          <div v-html="introduction?.heading" />
          <a
            v-if="!!introduction.button?.isexternal"
            target="_blank"
            :href="introduction.button?.href ? introduction.button?.href : '#'"
            class="primary-btn"
            >{{ introduction.button?.label }}</a
          >
          <NuxtLink
            v-else
            :to="introduction.button?.href ? introduction.button?.href : '#'"
            class="primary-btn"
            >{{ introduction.button?.label }}</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import forumImage from "@/assets/images/forum.png";

const forum = ref(null);
const { data } = await useAsyncData("support", () => GqlSupport());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.supports?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section
);
</script>

<style lang="scss" scoped></style>
