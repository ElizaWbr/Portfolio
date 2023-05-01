<template>
    <v-card class="pa-2 ma-3">
        <v-card-title class="page__title">
            {{ $t('contact') }}
        </v-card-title>
        <v-card class="mx-auto pa-8 home__card__content" elevation="8" rounded="lg">
            <v-card-text>
                {{ $t('select-a-button') }}:
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-center align-center">
                <a href="mailto:elizawebernha@gmail.com" :title="$t('send-email')">
                    <v-img src="@/assets/logos/Gmail_Logo.svg" alt="Logo do Gmail" class="mycontacts__logos">
                    </v-img>
                </a>
                <a href="https://wa.me/+5551989232339" :title="$t('whatsapp')">
                    <v-img src="@/assets/logos/Digital_Glyph_Green.svg" alt="Logo do WhatsApp"
                        class="mycontacts__logos">
                    </v-img>
                </a>
                <a href='https://github.com/ElizaWbr' :title="$t('github')">
                    <v-img src="@/assets/logos/github-mark.svg" alt="Logo do GitHub" class="mycontacts__logos">
                    </v-img>
                </a>
                <a href='https://www.linkedin.com/in/elizaweber' :title="$t('linkedin')">
                    <v-img src="@/assets/logos/LI-In-Bug.png" alt="Logo do LinkedIn" class="mycontacts__logos">
                    </v-img>
                </a>
            </v-card-actions>
        </v-card>
    </v-card>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/main.js'

export default {
    data: () => ({
        email: '',
        cellphone: '',
        github: '',
        linkedin: '',
    }),
    async mounted(){
        const querySnapshot = await getDocs(collection(db, 'personal-info/'));
        querySnapshot.forEach((doc) => {
            this.email = doc.data().email;
            this.cellphone = doc.data().cellphone;
            this.github = doc.github;
            this.linkedin = doc.data().linkedin;
            console.log(doc.data());
            console.log(this.linkedin)
        })
    },
    methods: {

    }
}
</script>