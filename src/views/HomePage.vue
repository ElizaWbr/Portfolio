<template>
    <!-- <BackSignInBar/> -->
    <AboutMe v-if="$route.path === '/aboutme'" />
    <MyProjects v-if="$route.path === '/myprojects'" />
    <FinalPage v-if="$route.path === '/finalpaper'" />
    <MyContacts v-if="$route.path === '/mycontacts'" />
</template>

<script>
// import BackSignInBar from '@/components/signin/BackSignInBar.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import MyProjects from '@/components/home/MyProjects.vue' 
import FinalPage from '@/components/home/FinalPage.vue'
import MyContacts from '@/components/home/MyContacts.vue'
export default {
    name: 'App',

    components: {
        // BackSignInBar,
        AboutMe,
        MyProjects,
        FinalPage,
        MyContacts
    },

    data: () => ({

    }),
}
</script>

<style>

</style>