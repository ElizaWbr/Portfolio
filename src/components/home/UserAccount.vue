<template>
    <v-card v-if="!userLoggedIn" class="pa-2 ma-3">
        <v-card-title class="page__title">
            {{ $t('my-account') }}
        </v-card-title>
        <v-card class="mx-auto pa-8 home__card__content" elevation="8" rounded="lg">
            <v-card-text>
                {{ $t('login-required') }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-center align-center">
                <router-link to="/login" class="mdi mdi-login-variant pl-3 useraccount__icons"
                :title="$t('already-registered')"></router-link>
                <router-link to="/register" class="mdi mdi-account-plus-outline pl-3 useraccount__icons"
                :title="$t('not-registered')"></router-link>
            </v-card-actions>
        </v-card>
    </v-card>
    <v-card v-if="userLoggedIn" class="pa-2 ma-3">
        <v-card-title class="page__title">
            {{ $t('my-account') }}
        </v-card-title>
        <v-card class="mx-auto pa-8 home__card__content" elevation="8" rounded="lg">
            <div class="usercard__content__info">
                <v-card-title class="pr-0 pl-0 usercard__content__title">
                    {{ $t('full-name') }}:
                </v-card-title>
                <v-text-field variant="outlined" density="compact" v-model="state.userName" class="pb-4 usercard__content__edit" hide-details>
                </v-text-field>
            </div>
            <v-card-subtitle v-if="v$.userName.$error" class="cardsubtitle">
                {{ v$.userName.$errors[0].$message }}
            </v-card-subtitle>
            <div class="usercard__content__info">
                <v-card-title class="pt-0 pr-0 pl-0 usercard__content__title">
                    Email:
                </v-card-title>
                <v-text-field variant="outlined" density="compact" v-model="state.userEmail" class="pb-4 usercard__content__edit" hide-details>
                </v-text-field>
            </div>
            <v-card-subtitle v-if="v$.userEmail.$error" class="cardsubtitle">
                {{ v$.userEmail.$errors[0].$message }}
            </v-card-subtitle>
            <v-card-subtitle v-if="accountMessages != '' " class="cardsubtitle">
                {{ accountMessages }} 
            </v-card-subtitle>
            <v-btn @click="dialogSure = true" variant="text">
                {{ $t('delete-account') }}
            </v-btn>
            <v-btn @click="ValidateData('validatechanges')" block>
                {{ $t('save-changes') }}
            </v-btn>
        </v-card>
        <v-card-title class="page__title">
            {{ $t('feedback') }}
        </v-card-title>
        <v-card class="mx-auto pa-8 home__card__content" elevation="8" rounded="lg">
            <v-card-text>
                {{ $t('leave-comment') }}:
            </v-card-text>
            <v-textarea v-model="userFeedback" variant="outlined" hide-details></v-textarea>
            <div class="text-center">
                <v-rating v-model="userRating" hover half-increments color="#b548b9"></v-rating>
            </div>
            <v-card-subtitle v-if="feedbackMessages != '' " class="cardsubtitle">
                {{ feedbackMessages }} 
            </v-card-subtitle>
            <v-btn @click="SaveFeedback()" block>
                {{ $t('save-changes') }}
            </v-btn>
        </v-card>
    </v-card>
    <v-card >
        <v-dialog
        v-model="dialogPassword"
        class="project-font
    "
        >
            <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
                <v-card-text class="pl-0 pr-0">
                    {{ $t('change-enter-password') }}
                </v-card-text>
                <v-text-field density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                v-model="state.userPassword" :placeholder="$t('password')" class="pb-4" type="password" hide-details>
                </v-text-field>
                <v-card-subtitle v-if="v$.userPassword.$error" class="cardsubtitle">
                    {{ v$.userPassword.$errors[0].$message }}
                </v-card-subtitle>
                <v-btn @click="ValidateData('change')" block>
                    {{ $t('save-changes') }}
                </v-btn>
            </v-card>
        </v-dialog>
    </v-card>
    <v-card >
        <v-dialog
        v-model="dialogSure"
        class="project-font
    "
        >
            <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
                <v-card-text class="pl-0 pr-0">
                    {{ $t('delete-sure') }}
                </v-card-text>
                <div class="d-flex justify-center">
                    <v-btn @click="dialogSure = false" class="dilogsure-button-no">
                        {{ $t('no') }}
                    </v-btn>
                    <v-btn @click="dialogDelete = true, dialogSure = false" variant="text" class="dilogsure-button-yes">
                        {{ $t('yes') }}
                    </v-btn>
                </div>
            </v-card>
        </v-dialog>
    </v-card>
    <v-card >
        <v-dialog
        v-model="dialogDelete"
        class="project-font
    "
        >
            <v-card class="mx-auto pa-8 signinCard__content" elevation="8" rounded="lg">
                <v-card-text class="pl-0 pr-0">
                    {{ $t('delete-enter-password') }}
                </v-card-text>
                <v-text-field density="compact" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                v-model="state.userPassword" :placeholder="$t('password')" class="pb-4" type="password" hide-details>
                </v-text-field>
                <v-card-subtitle v-if="v$.userPassword.$error" class="cardsubtitle">
                    {{ v$.userPassword.$errors[0].$message }}
                </v-card-subtitle>
                <v-btn @click="ValidateData('deleteUser')" block>
                    {{ $t('delete') }}
                </v-btn>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import { reactive, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import firebase from 'firebase/compat/app';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '@/main.js'
import { updateEmail, deleteUser } from 'firebase/auth'

export default {
    data: () => ({
        userFeedback: '',
        userRating: 0,
        dialogSure: false,
        dialogDelete: false,
        dialogPassword: false,
        accountMessages: '',
        feedbackMessages: '',
        userLoggedIn: false,
        
    }),
    setup() {
        const state = reactive({
            userName: '',
            userEmail: '',
            userPassword:'',
        })
        const rules = computed(() => {
            return {
                userName: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                },
                userEmail: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                    email: helpers.withMessage('This is not a valid email.', email)
                },
                userPassword: {
                    required: helpers.withMessage('This field cannot be empty.', required),
                },
            }
        })
        const v$ = useValidate(rules, state)
        return { state, v$ }
    },
    mounted(){
        if(auth.currentUser === null){
            this.userLoggedIn = false;
        }else{
            this.userLoggedIn = true;
            this.callFirebase();
        }
    },
    methods: {
        async callFirebase(){
            const querySnapshot = await getDoc(doc(db, 'users/' + auth.currentUser.uid));
            this.state.userName = querySnapshot.data().fullname;
            this.state.userEmail = querySnapshot.data().email;
            this.userFeedback = querySnapshot.data().feedback;
            this.userRating = querySnapshot.data().rating;
        },
        ValidateData(action) {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                if(action === 'validatechanges'){
                    console.log("validating changes")
                    this.dialogPassword = true;
                }else if(action==='change'){
                    console.log("sending changes to firebase")
                    this.SaveChanges();
                    this.dialogPassword = false;
                }else if(action === 'deleteUser'){
                    console.log("deleting user")
                    this.DeleteAccount();
                    this.dialogDelete = false;
                }
            } else if(action === 'validatechanges' && this.v$.$errors.length === 1 && this.v$.$errors[0].$uid === "userPassword-required"){
                this.dialogPassword = true;
            }else {
                console.log(this.v$.$errors)
            }
        },
        async DeleteAccount() {
            const user = auth.currentUser;
            const docRef = doc(db, "users", auth.currentUser.uid);
            firebase.auth()
            .signInWithEmailAndPassword(auth.currentUser.email, this.state.userPassword)
            .then (() => {
                deleteUser(user).then(() => {
                    console.log('Account deleted')
                    deleteDoc(docRef);
                    this.$router.push('/login')
                }).catch((error) => {
                    this.accountMessages = error
                    console.log('Account not deleted' + error);
                });
            }).catch((error) => {
                this.accountMessages = error
                console.log('Account not deleted' + error)
            })
        },
        SaveChanges() {
            const newEmail = this.state.userEmail;
            firebase.auth()
            .signInWithEmailAndPassword(auth.currentUser.email, this.state.userPassword)
            .then (() => {
                updateEmail(auth.currentUser, newEmail).then(() => {
                    console.log('User updated')
                    this.accountMessages = "Successfully saved changes!"
                    setDoc(doc(db, "users/" + auth.currentUser.uid), {
                        email: this.state.userEmail,
                        fullname: this.state.userName,
                        feedback: this.userFeedback,
                        rating: this.userRating,
                    });
                }).catch((error) => {
                    this.accountMessages = error
                });
            }).catch((error) => {
                this.accountMessages = error
            })
            console.log("salvar")
        },
        async SaveFeedback() {
            const querySnapshot = await getDoc(doc(db, 'users/' + auth.currentUser.uid));
            this.feedbackMessages = "Successfully saved changes!"
            setDoc(doc(db, "users/" + auth.currentUser.uid), {
                email: querySnapshot.data().email,
                fullname: querySnapshot.data().fullname,
                feedback: this.userFeedback,
                rating: this.userRating,
            });

            console.log("save feedback")
        }
    }

}
</script>