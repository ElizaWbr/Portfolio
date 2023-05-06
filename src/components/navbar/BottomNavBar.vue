<template>
    <div class="navbar__bottom">
        <div class="navbar__bottom__arrows">
            <span class="mdi mdi-arrow-left pr-3 pl-2"></span>
            <span class="mdi mdi-arrow-right pr-5"></span>
        </div>
        <div class="navbar__bottom__search">
            <span class="mdi mdi-magnify pl-2 pr-2"></span>
            <v-card-text class="pa-0">
                ELIZA WEBER
            </v-card-text>
        </div>
        <div class="navbar__bottom__icons">
            <button v-if="userLoggedIn" @click="Logout()" class="mdi mdi-logout-variant pl-3 signin__icons" :title="$t('logout')"></button>
            <router-link v-if="!userLoggedIn" to="/login" class="mdi mdi-login-variant pl-3 signin__icons"
            :title="$t('already-registered')"></router-link>
            <router-link v-if="!userLoggedIn" to="/register" class="mdi mdi-account-plus-outline pl-3 signin__icons"
            :title="$t('not-registered')"></router-link>
            <LocaleSwitcher />
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import { auth } from '@/main.js'

export default {
    components: {
        LocaleSwitcher
    },
    data: () => ({
        userLoggedIn: false,
    }),
    async mounted(){
        if(auth.currentUser === null){
            this.userLoggedIn = false;
        }else{
            this.userLoggedIn = true;
        }
    },
    methods: {
        Logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('/login')
            })
        }
    }
}
</script>