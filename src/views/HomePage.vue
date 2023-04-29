<template>
    <!-- <BackSignInBar/> -->
    <AboutMe v-if="$route.path === '/aboutme'" />
    <MyProjects v-if="$route.path === '/myprojects'" />
    <FinalPaper v-if="$route.path === '/finalpaper'" />
    <MyContacts v-if="$route.path === '/mycontacts'" />
    <UserAccount v-if="$route.path === '/useraccount'" />
</template>

<script>
// import BackSignInBar from '@/components/signin/BackSignInBar.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import MyProjects from '@/components/home/MyProjects.vue' 
import FinalPaper from '@/components/home/FinalPaper.vue'
import MyContacts from '@/components/home/MyContacts.vue'
import UserAccount from '@/components/home/UserAccount.vue'

import '../assets/home/home.css'

export default {
    name: 'App',

    components: {
        // BackSignInBar,
        AboutMe,
        MyProjects,
        FinalPaper,
        MyContacts,
        UserAccount
    },

    data: () => ({

    }),
}
</script>

<style>

</style>