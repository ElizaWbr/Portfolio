<template>
    <div class="signin__form">
        <v-card-title class="page__title">{{ $t('register') }}</v-card-title>
        <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
            <v-text-field v-model="state.fullName" :placeholder="$t('full-name')" prepend-inner-icon="mdi-account-outline"
                variant="outlined" density="compact" class="pb-4" hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.fullName.$error" class="cardsubtitle">
                {{ v$.fullName.$errors[0].$message }}
            </v-card-subtitle>
            <v-text-field v-model="state.userEmail" :placeholder="$t('email')" prepend-inner-icon="mdi-email-outline"
                variant="outlined" density="compact" class="pb-4" hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.userEmail.$error" class="cardsubtitle">
                {{ v$.userEmail.$errors[0].$message }}
            </v-card-subtitle>
            <v-text-field density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                v-model="state.userPassword" :placeholder="$t('password')" class="pb-4" type="password" hide-details></v-text-field>
            <v-card-subtitle v-if="v$.userPassword.$error" class="cardsubtitle">
                {{ v$.userPassword.$errors[0].$message }}
            </v-card-subtitle>
            <v-text-field v-model="state.confirmPassword" :placeholder="$t('confirm-password')" density="compact"
                prepend-inner-icon="mdi-lock-outline" variant="outlined" class="pb-4" type="password" hide-details>
            </v-text-field>
            <v-card-subtitle v-if="v$.confirmPassword.$error" class="cardsubtitle">
                {{ v$.confirmPassword.$errors[0].$message }}
            </v-card-subtitle>

            <v-card-subtitle v-if="errorMessage != '' " class="cardsubtitle">
                {{ errorMessage }} 
            </v-card-subtitle>

            <v-btn @click="ValidateData" block>
                {{ $t('register') }}
            </v-btn>
        </v-card>
    </div>
</template>
    
<script>
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

import firebase from 'firebase/compat/app';
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '@/main.js'

export default {
    data: () => ({
        errorMessage: '',
    }),
    setup() {
        const state = reactive({
            fullName: '',
            userEmail: '',
            userPassword: '',
            confirmPassword: '',
        })
        const rules = computed(() => {
            return {
                fullName: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                },
                userEmail: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    email: helpers.withMessage('This is not a valid email.', email)
                },
                userPassword: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    minLength: helpers.withMessage('The password must have at least 6 characters.', minLength(6))
                },
                confirmPassword: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    sameAs: helpers.withMessage("Passwords don't match.", sameAs(state.userPassword))
                }
            }
        })
        const v$ = useValidate(rules, state)
        return { state, v$ }
    },
    methods: {
        ValidateData() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                console.log('Approved form')
                this.RegisterUser();
            } else {
                console.log(this.v$)
            }
        },
        RegisterUser() {
            firebase.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
            .then(data => {
                setDoc(doc(db, "users", auth.currentUser.uid), {
                fullname: this.state.fullName,
                email: this.state.userEmail,
                feedback: '',
                rating: '',
                });
                console.log(data)
                this.$router.push('/aboutme')
            })

            .catch((error) => {
                this.errorMessage = error.message;
            });
        }
    }
}
</script>