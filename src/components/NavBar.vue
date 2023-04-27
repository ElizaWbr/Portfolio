<template>
    <TopNavBar/>
    <!-- <TopNavBar/> -->
    <BottomNavBar/>
    <!-- <SignInNavBar/> -->
</template>

<script>
  // import SignInNavBar from '../components/signin/SignInNavBar.vue'
  // import TopNavBar from '../components/navbar/TopNavBar.vue'
  import BottomNavBar from '../components/navbar/BottomNavBar.vue'

  import TopNavBar from '../components/navbar/TopNavBar.vue'

  export default {

  components: {
    // SignInNavBar,
    // TopNavBar,
    BottomNavBar,
    TopNavBar
  },

  data: () => ({
    //
  }),
}
</script>