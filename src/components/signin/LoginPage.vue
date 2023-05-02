<template>
    <div class="signin__form">
        <v-card-title class="page__title">{{ $t('login') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-text-field prepend-inner-icon="mdi-email-outline" variant="outlined" density="compact" v-model="state.userEmail"
                :placeholder="$t('email')" class="pb-4" hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.userEmail.$error" class="cardsubtitle">
                {{ v$.userEmail.$errors[0].$message }}
            </v-card-subtitle>
            <v-text-field
                density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined" v-model="state.userPassword" :placeholder="$t('password')" class="pb-4" type="password"
                hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.userPassword.$error" class="cardsubtitle">
                {{ v$.userPassword.$errors[0].$message }}
            </v-card-subtitle>

            <v-card-subtitle v-if="errorMessage != '' " class="cardsubtitle">
                {{ errorMessage }} 
            </v-card-subtitle>

            <v-btn @click="ValidateData" block>
                {{ $t('login') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

import firebase from 'firebase/compat/app';

export default {
    data: () => ({
        errorMessage: '',
    }),
    setup() {
        const state = reactive({
            userEmail: '',
            userPassword: '',
        })
        const rules = computed(() => {
            return {
                userEmail: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    email: helpers.withMessage('This is not a valid email.', email)
                },
                userPassword: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    minLength: helpers.withMessage('The password must have at least 6 characters.', minLength(6))
                },
            }
        })
        const v$ = useValidate(rules, state)
        return { state, v$ }
    },
    methods: {
        ValidateData(){
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                console.log('Approved form')
                this.LoginUser();
            } else {
                console.log(this.v$)
            }
        },
        LoginUser() {
            firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
            .then(() => {
                this.$router.push('/aboutme')
            })
            .catch((error) => {
                this.errorMessage = error.message;
            });
        }
    }
}
</script>
