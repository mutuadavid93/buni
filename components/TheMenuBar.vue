<template>
  <Head>
    <Title>BUNI</Title>
    <Meta property="og:title" content="BUNI" />
    <Meta property="og:type" content="" />
    <Meta property="og:url" content="" />
    <Meta property="og:image" content="" />
    <Meta name="theme-color" content="#84BC02" />
  </Head>

  <!-- mobile_nav -->
  <div id="mobile_nav">
    <div class="nav-scroller">
      <nav>
        <ul>
          <li v-for="link in links" :key="link.id">
            <a
              v-if="!!link?.isexternal"
              :href="link?.href ? link.href : '/'"
              rel="noreferrer"
              target="_blank"
              >{{ link.label }}</a
            >
            <NuxtLink
              @click.native="toggleMenu"
              v-else
              :to="link?.href ? link.href : '/'"
              >{{ link.label }}</NuxtLink
            >
          </li>
          <li>
            <a target="_blank" href="#" rel="noreferrer" class="btn-nav"
              >Log in/ Sign up</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- mobile_nav end -->

  <header>
    <NuxtLink class="logo-wrapper" to="/">
      <span class="logo">
        <img src="~/assets/images/logo.svg" width="178" height="59" alt="KCB" />
      </span>
      <span class="logo-text">BUNI</span>
    </NuxtLink>

    <nav id="main_nav">
      <!-- <a href="/">Getting Started</a> -->
      <div v-for="link in links" :key="link.id">
        <a
          v-if="!!link?.isexternal"
          :href="link?.href ? link.href : '/'"
          rel="noreferrer"
          target="_blank"
          >{{ link.label }}</a
        >
        <NuxtLink v-else :to="link?.href ? link.href : '/'">{{
          link.label
        }}</NuxtLink>
      </div>
      <a target="_blank" href="#" rel="noreferrer" class="btn-nav"
        >Log in/ Sign up</a
      >
    </nav>
    <div
      class="navigation-hamburger -close"
      @click.prevent="toggleMenu"
      ref="hamburger"
    >
      <div class="bar-wrap">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
      <div class="cross-wrap">
        <div class="cross-line cross-line1"></div>
        <div class="cross-line cross-line2"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
const bodyClass = ref("");
const hamburger = ref(null);
useHead({
  bodyAttrs: {
    class: bodyClass
  }
});
const { data } = await useAsyncData("mainmenu", () => GqlMainmenu());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.mainNavs?.data;
const links = computed(() => payload[0].attributes?.link);

const toggleMenu = ($event) => {
  const menu = hamburger.value;
  const isOpen = menu.classList.contains("-open");
  if (isOpen) {
    menu.classList.remove("-open");
    menu.classList.add("-close");
    bodyClass.value = "";
  } else {
    menu.classList.remove("-close");
    menu.classList.add("-open");
    bodyClass.value = "menu-open";
  }
};
</script>
