<template>
  <section
    class="content-wrapper welcome-section"
    :style="{ backgroundImage: `url(${welcomeImage})` }"
  >
    <div class="wrapper">
      <div class="col">
        <h1 class="section-title">Welcome to Buni</h1>
        <p>
          This developer platform is dedicated to showing developers and
          innovators all the ways that KCB helps you bring big ideas to life.
          Whether you are looking to digitize your business, empower your
          application with our APIs or validate your next innovation, BUNI has
          something for you.
        </p>
        <p>
          Here you will find diverse APIs, a sandbox for your experiments,
          access to dev resources and connect to your tribe as you build with
          BUNI.
        </p>
        <a href="#" class="primary-btn">GET STARTED</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import welcomeImage from "@/assets/images/welcome-banner.png";
</script>

<style lang="scss" scoped></style>
