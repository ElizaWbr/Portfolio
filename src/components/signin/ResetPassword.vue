<template>
    <div class="login-form">
        <v-card-title class="page__title">{{ $t('reset-password') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-card-subtitle
                class="white-space-normal mb-3">{{ $t('reset-password-description') }}</v-card-subtitle>
            <v-text-field v-model="email" prepend-inner-icon="mdi-email-outline" :placeholder="$t('email')"
                variant="outlined" density="compact">
            </v-text-field>
            <v-btn @click="Login" block>
                {{ $t('reset-password') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
export default {
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        Login() {
            console.log("Entrar " + this.email + " " + this.password);
        }
    }
}
</script>
