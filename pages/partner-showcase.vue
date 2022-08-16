<template>
  <div>
    <section
      class="content-wrapper discover-apis welcome-section"
      :style="{
        backgroundImage: `url(${banner})`
      }"
    >
      <div class="wrapper">
        <div class="col">
          <h1 class="section-title">Partner Showcase</h1>
          <p>
            Take a look at the various ways in which different business and
            innovators have used APIs available on Buni to build new solution
            and deliver digital experiences for their customers.
          </p>
        </div>
      </div>
    </section>

    <PartnerShowcaseContent />
  </div>
</template>

<script setup>
import banner from "@/assets/images/partner-showcase.png";
</script>

<style lang="scss" scoped></style>
