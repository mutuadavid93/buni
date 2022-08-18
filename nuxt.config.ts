import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // My nuxt config
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
      baseUrl: process.env.SERVER_URL
    }
  },
});
