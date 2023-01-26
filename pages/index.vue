<template>
  <div>
    <home-page-welcome :welcomeData="welcomeData" />
    <home-page-what-buni-can-do :buniDefinition="buniDefinition" />
    <home-page-why-buni :buniPurpose="buniPurpose" />
    <home-page-buni-as-partner :buniPartner="buniPartner" />

    <!-- Two Cards -->
    <section class="content-wrapper ready-to-innovate-section">
      <div class="wrapper">
        <div class="col-2">
          <div
            class="card"
            v-for="usecase in buniUseCases"
            :key="usecase.id"
            :class="usecase.button?.classname"
          >
            <div class="card-content">
              <div v-html="usecase?.heading" />
              <a
                v-if="!!usecase.button?.isexternal"
                target="_blank"
                :href="usecase.button?.href ? usecase.button?.href : '#'"
                class="primary-btn"
                >{{ usecase.button?.label }}</a
              >
              <NuxtLink
                v-else
                :to="usecase.button?.href ? usecase.button?.href : '/'"
                class="primary-btn"
                >{{ usecase.button?.label }}</NuxtLink
              >
            </div>

            <div class="card-header">
              <img
                :src="$config.baseUrl + '' + usecase.image.data.attributes?.url"
                alt="Ready to innovate?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { data } = await useAsyncData("homepagesections", () =>
  GqlHomepagesections()
);

const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};

// Note:: setup can be ran beforeCreate() and created() hooks thus code which can run inside
// those hooks can be placed here anyways.
const payload = data.value.homePageBodies?.data;

// Computed Properties
const welcomeData = computed(
  () => getSection({ payload, name: "welcome" })?.section[0]
);

const buniDefinition = computed(
  () => getSection({ payload, name: "what-can-buni-do" })?.section
);

const buniPurpose = computed(
  () => getSection({ payload, name: "why-buni" })?.section
);

const buniPartner = computed(
  () => getSection({ payload, name: "best-partner" })?.section
);

const buniUseCases = computed(
  () => getSection({ payload, name: "use-buni" })?.section
);
</script>
