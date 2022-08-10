<template>
  <div>
    <the-menu-bar />
    <slot />
    <the-footer />
  </div>
</template>

<script>
export default {
  // Layout specific CSS
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "site.webmanifest"
      },
      {
        rel: "stylesheet",
        href: "assets/css/normalize.css"
      },
      {
        rel: "stylesheet",
        href: "assets/css/main.css"
      }
    ]
  }
};
</script>

<style lang="scss" scoped></style>
