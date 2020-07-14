<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',

  components: {
    Main
  },

  data: () => ({
    //
  }),
};
</script>
