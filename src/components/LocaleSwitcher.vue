<template>
    <v-select class="locale-switcher" density="compact" hide-details variant="text" v-model="$i18n.locale" :items="items" item-title="title" item-value="id" prepend-inner-icon="mdi-translate">
    </v-select>
</template>

<script>
export default {
    name: "LocaleSwitcher",
    data() {
        return {
            locales: ["pt-br", "en"],
            items: [
                { id: 'pt-br', title: 'Português' },
                { id: 'en', title: 'English' }
            ]
        };

    }
};
</script>

<style>
/* Makes the arrow desappear */
.v-field__append-inner>.v-icon {
    display: none;
}

/* Makes the language name desappear */
.v-select__selection-text {
    display: none;
}

/* Changes icon size */
.v-icon--size-default {
    font-size: 1rem;
}

/* Changes input's size */
.locale-switcher .v-field__field {
    max-width: 0px;
}

/* Changes icon setting and align to center */
.v-field__prepend-inner,
.v-field__append-inner,
.v-field__clearable {
    align-items: center;
    padding-top: 0px;
    min-height: 0%;
}

/* Changes icon color to 100% */
.v-field__prepend-inner>.v-icon,
.v-field__append-inner>.v-icon,
.v-field__clearable>.v-icon {
    opacity: 100%;
}
</style>