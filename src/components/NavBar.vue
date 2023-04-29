<template>
  <TopNavBar />
  <BottomNavBar />
</template>

<script>
import BottomNavBar from '../components/navbar/BottomNavBar.vue'
import TopNavBar from '../components/navbar/TopNavBar.vue'

import '../assets/navbar/navbar.css'

export default {

  components: {
    BottomNavBar,
    TopNavBar
  },

  data: () => ({
    //
  }),
}
</script>