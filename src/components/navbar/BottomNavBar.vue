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
            <button @click="Logout()" class="mdi mdi-logout-variant pl-3 signin__icons" :title="$t('logout')"></button>
            <LocaleSwitcher />
        </div>
    </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
    components: {
        LocaleSwitcher
    },
    data: () => ({
        items: [
            { id: 'pt-br', title: 'Português', icon: 'mdi-phone' },
            { id: 'en', title: 'English', icon: 'mdi-phone' }
        ]
    }),
    methods: {
        // Logut: function() {
        //     firebase.auth().signOut().then(() => {
        //         this.$router.replace('login')
        //     })
        // }
        Logout() {
            console.log("logout")
        }
    }
}
</script>