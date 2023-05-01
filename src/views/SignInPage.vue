<template>
    <div>
        <div class="signin__background">
            <div class="signin__box">
                <v-card class="signin__card">
                    <TopSingInBar />
                    <div class="signin__card__content">
                        <SignInNavBar />
                        <div class="signin__card__content__center">
                            <div class="card__left"></div>
                            <div class="card__center">
                                <LoginPage v-if="$route.path === '/login'" />
                                <RegisterPage v-if="$route.path === '/register'" />
                                <ResetPassword v-if="$route.path === '/resetpassword'" />
                            </div>
                            <div class="card__right"></div>
                        </div>
                        <div class="signin__card__content__bottom"></div>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>
    
<script>
import LoginPage from '@/components/signin/LoginPage.vue'
import RegisterPage from '@/components/signin/RegisterPage.vue'
import ResetPassword from '@/components/signin/ResetPassword.vue'

import TopSingInBar from '@/components/signin/TopSingInBar.vue';
import SignInNavBar from '@/components/signin/SignInNavBar.vue'

import '../assets/signin/signin.css'

export default {
    name: 'App',

    components: {
        LoginPage,
        RegisterPage,
        ResetPassword,
        TopSingInBar,
        SignInNavBar
    },

    data: () => ({

    }),
}

</script>