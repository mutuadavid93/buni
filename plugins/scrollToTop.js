// Enable scrolling to top when changin routes
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0);
    }
  };
});
