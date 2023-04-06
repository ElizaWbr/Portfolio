<template>
  <v-app>
    <!-- navbar aqui em cima -->
    <v-main class="main-class">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  // components: {
  //   SignInPage
  // },

  data: () => ({
    //
  }),
}
</script>
<style>
.main-class{
  background-color: #e0d2ef;
}
</style>