<template>
  <v-app>
    <AppHeader/>
      <v-main class="mt-4">
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",

  components: {
    AppHeader,
  },

  data: () => ({
    //
  })
};
</script>
