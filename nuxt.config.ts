import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // My nuxt config
  "graphql-client": {
    watch: true,
    autoImport: true,
    functionPrefix: "Gql",
    documentPaths: ["./queries", "./mutations"],
    preferGETQueries: false,

    // codegen: false
    codegen: {
      silent: true,
      skipTypename: true,
      useTypeImports: false,
      dedupeFragments: true,
      onlyOperationTypes: true,
      disableOnBuild: false
    }
  },
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      // GQL_HOST: process.env.GQL_HOST,
      baseUrl: process.env.SERVER_URL
    }
  },
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/main.css",
    "~/assets/css/vuetabs.css"
  ]
});
