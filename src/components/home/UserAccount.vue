<template>
    <v-card class="pa-2 ma-3">
        <v-card-title class="page__title">
            {{ $t('my-account') }}
        </v-card-title>
        <v-card class="mx-auto pa-8 home__card__content" elevation="8" rounded="lg">
            <div class="usercard__content__info">
                <v-card-title class="pr-0 pl-0 usercard__content__title">
                    {{ $t('full-name') }}:
                </v-card-title>
                <v-text-field variant="outlined" density="compact" v-model="userName" class="pb-4 usercard__content__edit" hide-details>
                </v-text-field>
            </div>
            <div class="usercard__content__info">
                <v-card-title class="pt-0 pr-0 pl-0 usercard__content__title">
                    Email:
                </v-card-title>
                <v-text-field variant="outlined" density="compact" v-model="userEmail" class="pb-4 usercard__content__edit" hide-details>
                </v-text-field>
            </div>
            <v-btn @click="deleteAccount()" variant="text">
                {{ $t('delete-account') }}
            </v-btn>
            <v-btn @click="saveChanges()" block>
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
                <v-rating v-model="rating" hover half-increments color="#b548b9"></v-rating>
            </div>
            <v-btn @click="saveFeedback()" block>
                {{ $t('save-changes') }}
            </v-btn>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        userEmail: 'aaaaaaaaaaaaaaaaa@gmail.com',
        userName: 'Nome Completo do Usuário',
        userFeedback: 'Muito bom',
        rating: 1,
    }),
    methods: {
        deleteAccount() {
            console.log("deletar")
        },
        saveChanges() {
            console.log("salvar")
        },
        saveFeedback() {
            console.log("salvar avaliação")
        }
    }

}
</script>