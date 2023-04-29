<template>
    <div class="signin__navBar">
        <div class="signin__navBar__arrows">
            <span class="mdi mdi-arrow-left pr-3 pl-2"></span>
            <span class="mdi mdi-arrow-right pr-5"></span>
        </div>
        <div class="signin__navBar__search">
            <span class="mdi mdi-magnify pl-2 pr-2"></span>
            <v-card-text class="pa-0">ELIZA WEBER</v-card-text>
        </div>
        <div class="signin__navBar__icons">
            <router-link to="/login" class="mdi mdi-login-variant pl-3 signin__icons"
                :title="$t('already-registered')"></router-link>
            <router-link to="/register" class="mdi mdi-account-plus-outline pl-3 signin__icons"
                :title="$t('not-registered')"></router-link>
            <router-link to="/resetpassword" class="mdi mdi-lock-question pl-3 signin__icons"
                :title="$t('forgot-password')"></router-link>
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
}
</script>