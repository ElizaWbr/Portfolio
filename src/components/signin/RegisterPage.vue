<template>
    <div class="login-form">
        <v-card-title class="page__title">{{ $t('register') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-text-field v-model="name" :placeholder="$t('full-name')" prepend-inner-icon="mdi-account-outline"
                variant="outlined" density="compact" class="pb-4" hide-details>
            </v-text-field>
            <v-text-field v-model="email" :placeholder="$t('email')" prepend-inner-icon="mdi-email-outline"
                variant="outlined" density="compact" class="pb-4" hide-details>
            </v-text-field>
            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible" v-model="password" :placeholder="$t('password')" class="pb-4"
                hide-details>
            </v-text-field>
            <v-text-field v-model="confirmpassword" :placeholder="$t('confirm-password')"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible" class="pb-4" hide-details>
            </v-text-field>
            <v-btn @click="Register" block>
                {{ $t('register') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
export default {
    data: () => ({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        visible: false,
    }),
    methods: {
        Register() {
            console.log("Entrar " + this.name + " " + this.email + " " + this.password + " " + this.confirmpassword);
        }
    }
}
</script>