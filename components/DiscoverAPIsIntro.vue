<template>
  <section
    class="content-wrapper discover-apis welcome-section"
    :style="{
      backgroundImage: `url(${banner})`
    }"
  >
    <div class="wrapper">
      <div class="col">
        <h1 class="section-title">Discover APIs</h1>
        <p>
          Innovators and developers are building their next big <br />idea on
          BUNI. Our APIs offer various financial and non-<br />financial
          capabilities, integrating your solution to KCB's <br />digital
          platforms.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import banner from "@/assets/images/discover-apis-banner.png";
</script>

<style lang="scss" scoped></style>
