<template>
    <div class="signin__form">
        <v-card-title class="page__title">{{ $t('reset-password') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-card-subtitle
                class="white-space-normal mb-3">{{ $t('reset-password-description') }}</v-card-subtitle>
            <v-text-field v-model="state.userEmail" prepend-inner-icon="mdi-email-outline" :placeholder="$t('email')"
                variant="outlined" density="compact" class="pb-4" hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.userEmail.$error" class="cardsubtitle">
                {{ v$.userEmail.$errors[0].$message }}
            </v-card-subtitle>
            <v-card-subtitle v-if="emailSentMessage === true " class="cardsubtitle">
                {{ $t('email-sent-message') }} 
            </v-card-subtitle>
            <v-card-subtitle v-if="emailSentErrorMessage != '' " class="cardsubtitle">
                {{ emailSentErrorMessage }} 
            </v-card-subtitle>
            <v-btn @click="ValidateData" block>
                {{ $t('reset-password') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import { auth } from '@/main.js'
import { sendPasswordResetEmail } from 'firebase/auth'

export default {
    data: () => ({ 
        emailSentMessage: false,
        emailSentErrorMessage: '',
    }),
    setup() {
        const state = reactive({
            userEmail: '',
        })
        const rules = computed(() => {
            return {
                userEmail: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    email: helpers.withMessage('This is not a valid email.', email)
                },
            }
        })
        const v$ = useValidate(rules, state)
        return { state, v$ }
    },
    methods: {
        ValidateData() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                console.log('Approved form')
                this.SendResetEmail();
            } else {
                console.log(this.v$)
            }
        },
        SendResetEmail() {
            sendPasswordResetEmail(auth, this.state.userEmail)
            .then(() => {
                this.emailSentMessage = true;
                this.emailSentErrorMessage = '';
            })
            .catch((error) => {
                this.emailSentErrorMessage = error.message;
                this.emailSentMessage = false;
            });
        }
    }
}
</script>
