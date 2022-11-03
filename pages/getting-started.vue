<template>
  <div>
    <section
      class="content-wrapper discover-apis getting-started welcome-section"
      :style="{
        backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
      }"
    >
      <div class="wrapper">
        <div class="col" v-html="introduction?.heading" />
      </div>
    </section>

    <app-tabs />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
// const route = useRoute();

// useHead({
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
//       body: true
//     },
//     {
//       // src: "plugins.js",
//       src: "https://azsnsgdevsa.blob.core.windows.net/dev/KCBBUNI/plugins.js",
//       body: true
//     }
//   ]
// });

const { data } = await useAsyncData("gettinstarted", () => GqlGettinstarted());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.gettingStarteds?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section
);
const tabs = computed(
  () => getSection({ payload, name: "introduction" })?.tabs
);

// onMounted(() => {
//   console.log("current name", route.name);
//   if (window) {
//     if (CBPFWTabs) {
//       if (route.name === "getting-started")
//         new CBPFWTabs(document.getElementById("tabs"));
//     } // EndIf
//   }
// });
// console.log("--- ", tabs);
</script>

<style lang="scss" scoped></style>
