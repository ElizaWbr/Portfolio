<template>
    <div class="">
        <v-card-title class="page__title">{{ $t('login') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-text-field prepend-inner-icon="mdi-email-outline" variant="outlined" density="compact" v-model="email"
                :placeholder="$t('email')" class="pb-4" hide-details>
            </v-text-field>
            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible" v-model="password" :placeholder="$t('password')" class="pb-4"
                hide-details>
            </v-text-field>
            <v-btn @click="Login" block>
                {{ $t('login') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
export default {
    data: () => ({
        email: '',
        password: '',
        visible: false,
    }),
    methods: {
        Login() {
            console.log("Entrar " + this.email + " " + this.password);
        }
    }
}
</script>
