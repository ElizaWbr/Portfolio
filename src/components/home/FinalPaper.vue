<template>
    <v-card class="finalpaper__card pa-2 ma-3">
        <div class="finalpaper__card__left">
            <v-card-title>
                {{ $t('final-paper-title') }}
            </v-card-title>
            <v-card-text class="card__text-justify">
                &nbsp; &nbsp; {{ $t('final-paper-text-one') }}
                <br>
                &nbsp; &nbsp; {{ $t('final-paper-text-two') }}
                <br>
                &nbsp; &nbsp; {{ $t('final-paper-link') }}:
                <br>
                <a
                    href="http://biblioteca.ifsul.edu.br/pergamum/anexos_sql_hom81/00005a/00005aca.pdf">http://biblioteca.ifsul.edu.br/pergamum/anexos_sql_hom81/00005a/00005aca.pdf
                </a>
                <br>
            </v-card-text>
        </div>
        <div class="finalpaper__card__right">
            <v-card-text>
                <a href="https://elizawbr.github.io/sos-helper/">
                    <v-img src="@/assets/img/SOSHelper.png" alt="SOSHelper login page" class="finalpaper__card__img">
                    </v-img>
                </a>
            </v-card-text>
        </div>
    </v-card>
</template>