<template>
    <div class="d-flex justify-center">
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                Series.Show
            </v-card-title>
            <v-card-text class="card__text-justify">
                {{ $t('series.show-description') }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://elizawbr.github.io/Series.Show/" class="myprojects__card__image">
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FSeries.Show.png?alt=media&token=9271d919-42d2-4503-af43-774be2030231" alt="Series.Show home">
                    </v-img>
                </a>
            </v-card>
        </v-card>
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                {{ $t('tik-tok-project-title') }}
            </v-card-title>
            <v-card-text class="card__text-justify">
                {{ $t('tik-tok-project-description') }}
            </v-card-text>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://tiktok---jornadadev-95aa8.web.app" class="myprojects__card__image">
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FTikTok_Clone.png?alt=media&token=de592ce3-15cd-4ad5-b13e-5198fe28d7cb" alt="TikTok Clone preview">
                    </v-img>
                </a>
            </v-card>
        </v-card>
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                {{ $t('lpiii-project-title') }}
            </v-card-title>
            <v-card-text class="card__text-justify">
                {{ $t('lpiii-project-description') }}
            </v-card-text>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://github.com/ElizaWbr/Trabalho-de-LPII-PHP" class="myprojects__card__image">
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FPHP_Project.png?alt=media&token=7a4f4300-4196-4401-875c-5db6343e85e8" alt="Projeto PHP no GitHub">
                    </v-img>
                </a>
            </v-card>
        </v-card>
    </div>
</template>