<template>
  <section class="content-wrapper buni-use-cases-section">
    <div class="wrapper">
      <!-- <div class="seamlessly-moving-money article rtl">
        <div class="text-copy">
          <h3>Seamlessly <br />Moving Money</h3>
          <p>
            Sending and receiving money is now easier. Your business can now
            digitize the process of collection and payouts through mobile money
            wallets and other bank accounts.
          </p>
        </div>
        <div class="copy-image">
          <img
            src="~/assets/images/seamlessly-moving-money.png"
            alt="Seamlessly Moving Money"
          />
        </div>
      </div>
      <div class="powering-business-digitization article ltr">
        <div class="text-copy">
          <h3>Powering business <br />digitization</h3>
          <p>
            Buni API allows our corporate customers to evolve digitally,
            enabling them to connect with the bank, automate various business
            functions and access information in real-time.
          </p>
        </div>
        <div class="copy-image">
          <img
            src="~/assets/images/powering-business-digitization.png"
            alt="Powering business digitization"
          />
        </div>
      </div> -->
      <div v-for="cnt in content" :key="cnt.id" :class="cnt.button?.classname">
        <div class="text-copy" v-html="cnt?.heading" />
        <div class="copy-image">
          <img
            :src="$config.baseUrl + '' + cnt.image.data.attributes?.url"
            alt="Connect to our Ecosystem"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>
