<template>
  <section class="content-wrapper faqs-section">
    <div class="wrapper">
      <!-- accordion -->
      <ul class="accordion">
        <li v-for="f in faqs" :key="f.id">
          <h2 class="title" @click.prevent="toggleAccordion">
            <a href="#">{{ f.attributes?.question }}</a>
          </h2>
          <div class="desc" v-html="f.attributes?.answer" />
        </li>
      </ul>
      <!-- accordion end -->
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("faq", () => GqlFaq());
const toggleAccordion = (event) => {
  if (event.target.parentNode.tagName === "LI") {
    event.target.parentNode.classList.toggle("content-visible");
    event.target.nextSibling.classList.toggle("toggle-desc");
  }
};
const faqs = computed(() => data.value.faqs?.data);
</script>

<style lang="css" scoped>
.toggle-desc {
  display: block !important;
}
</style>
