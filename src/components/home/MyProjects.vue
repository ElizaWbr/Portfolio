<template>
    <div class="d-flex justify-center">
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                Series.Show
            </v-card-title>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://elizawbr.github.io/Series.Show/" class="myprojects__card__image">
                    <v-img cover src="../../../public/img/cover/Series.Show.png" alt="Series.Show home">
                    </v-img>
                </a>
            </v-card>
            <v-card-text class="card__text-justify">
                <v-divider></v-divider>
                <br>
                <span style="color: #640abd;" class="mdi mdi-circle-medium"></span>
                {{ $t('series.show-about') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #640abd;" class="mdi mdi-circle-medium"></span>
                {{ $t('series.show-technologies') }}
            </v-card-text>
            <v-card-text class="card__text-justify">
            </v-card-text>

        </v-card>
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                {{ $t('tik-tok-project-title') }}
            </v-card-title>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://tiktok---jornadadev-95aa8.web.app" class="myprojects__card__image">
                    <v-img cover src="../../../public/img/cover/TikTok_Clone.png" alt="TikTok Clone preview">
                    </v-img>
                </a>
            </v-card>
            <v-card-text class="card__text-justify">
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('tik-tok-project-about') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('tik-tok-project-technologies') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('tik-tok-project-description') }}
            </v-card-text>
        </v-card>
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                {{ $t('lpiii-project-title') }}
            </v-card-title>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://github.com/ElizaWbr/Trabalho-de-LPII-PHP" class="myprojects__card__image">
                    <v-img cover src="../../../public/img/cover/PHP_Project.png" alt="Projeto PHP no GitHub">
                    </v-img>
                </a>
            </v-card>
            <v-card-text class="card__text-justify">
                <v-divider></v-divider>
                <br>
                <span style="color: #ff80b4;" class="mdi mdi-circle-medium"></span>
                {{ $t('lpiii-project-about') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #ff80b4;" class="mdi mdi-circle-medium"></span>
                {{ $t('lpiii-project-technologies') }}
            </v-card-text>
        </v-card>
    </div>
    <div class="d-flex justify-center projects__background">
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                {{ $t('portfolio-project-title') }}
            </v-card-title>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://github.com/ElizaWbr/Portfolio" class="myprojects__card__image">
                    <v-img cover src="../../../public/img/cover/Portfolio-GitHub.png" alt="Projeto PHP no GitHub">
                    </v-img>
                </a>
            </v-card>
            <v-card-text class="card__text-justify">
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('portfolio-project-about') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('portfolio-project-technologies') }}
                <br>
                <br>
                <v-divider></v-divider>
                <br>
                <span style="color: #b548b9;" class="mdi mdi-circle-medium"></span>
                {{ $t('portfolio-project-description') }}
            </v-card-text>
        </v-card>
    </div>
</template>