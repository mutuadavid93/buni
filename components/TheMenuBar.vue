<template>
  <Head>
    <Title>BUNI</Title>
    <Meta property="og:title" content="BUNI" />
    <Meta property="og:type" content="" />
    <Meta property="og:url" content="" />
    <Meta property="og:image" content="" />
    <Meta name="theme-color" content="#84BC02" />
  </Head>

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
            <div
              class="dropdown custom-dropdown status_dropdown"
              data-color="created-status"
              ref="mobileDropdown"
            >
              <button
                class="btn dropdown-toggle status__btn"
                type="button"
                id="dropdownMenumobile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,12"
                @click.prevent="toggleDropdown"
              >
                Support
              </button>
              <ul
                class="dropdown-menu status_change"
                aria-labelledby="dropdownMenumobile"
                ref="dropdown"
              >
                <li>
                  <NuxtLink
                    class="dropdown-item"
                    @click.native="handleItemClick"
                    data-class="forum"
                    to="/support"
                    >Forum</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="dropdown-item"
                    @click.native="handleItemClick"
                    data-class="faq"
                    to="/"
                    >FAQs</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="dropdown-item"
                    @click.native="handleItemClick"
                    data-class="contactUs"
                    to="/contact-us"
                    >Contact Us</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              target="_blank"
              href="https://sandbox.buni.kcbgroup.com/devportal/services/configs"
              rel="noreferrer"
              class="btn-nav"
              >Log in/ Sign up</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <header>
    <NuxtLink class="logo-wrapper" to="/">
      <span class="logo">
        <img src="~/assets/images/logo.svg" width="178" height="59" alt="KCB" />
      </span>
      <span class="logo-text">BUNI</span>
    </NuxtLink>

    <nav id="main_nav">
      <div :style="styleDiv" v-for="link in links" :key="link.id">
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

      <div
        class="dropdown custom-dropdown status_dropdown"
        data-color="created-status"
        ref="dropdown"
      >
        <button
          class="btn dropdown-toggle status__btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-offset="0,12"
          @click.prevent="toggleDropdown"
        >
          Support
        </button>
        <ul
          class="dropdown-menu status_change"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <NuxtLink
              class="dropdown-item"
              @click.native="handleItemClick"
              data-class="forum"
              to="/support"
              >Forum</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="dropdown-item"
              @click.native="handleItemClick"
              data-class="faq"
              to="/"
              >FAQs</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="dropdown-item"
              @click.native="handleItemClick"
              data-class="contactUs"
              to="/contact-us"
              >Contact Us</NuxtLink
            >
          </li>
        </ul>
      </div>
      <a
        target="_blank"
        href="https://sandbox.buni.kcbgroup.com/devportal/services/configs"
        rel="noreferrer"
        class="btn-nav"
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
const dropdown = ref(null);
const mobileDropdown = ref(null);
const styleDiv = reactive({ height: 100 + "%" });
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

const handleItemClick = ($event) => {
  const item = $event.target.classList.contains("dropdown-item");
  dropdown.value.closest(".dropdown").classList.toggle("show");
  mobileDropdown.value.closest(".dropdown").classList.toggle("show");
  if (item) toggleMenu(); // Close drawer and return to opened page
};

const onMouseUp = (e) => {
  if (
    !dropdown.value.isEqualNode(e.target) &&
    dropdown.value.contains(e.target) == false
  ) {
    dropdown.value.classList.remove("show");
  }
};

const toggleDropdown = () => {
  const menu = dropdown.value.closest(".dropdown");
  const mobileMenu = mobileDropdown.value.closest(".dropdown");

  menu.classList.toggle("show");
  mobileMenu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    document.addEventListener("mouseup", onMouseUp);
  } else {
    document.removeEventListener("mouseup", onMouseUp);
  }
};
</script>
