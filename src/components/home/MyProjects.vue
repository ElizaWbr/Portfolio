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
                    <v-img cover src="@/assets/img/Series.Show.png" alt="Series.Show home">
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
                    <v-img cover src="@/assets/img/TikTok_Clone.png" alt="TikTok Clone preview">
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
                    <v-img cover src="@/assets/img/PHP_Project.png" alt="Projeto PHP no GitHub">
                    </v-img>
                </a>
            </v-card>
        </v-card>
    </div>
</template>