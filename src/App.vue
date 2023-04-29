<template>
  <v-app>
    <!-- trocar depois pra aparecer só quando estiver atenticado -->
    <v-main class="main-class">
      <div v-if="$route.path === '/login' || $route.path === '/register' || $route.path === '/resetpassword'">
        <router-view />
      </div>
      <div class="app__background"
        v-if="$route.path != '/login' && $route.path != '/register' && $route.path != '/resetpassword'">
        <NavBar />
        <div class="app__background__window">
          <router-view />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>