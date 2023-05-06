<template>
    <div class="d-flex justify-center">
        <v-card class="myprojects__card">
            <v-card-title class="page__title pt-4">
                Series.Show
            </v-card-title>
            <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                <a href="https://elizawbr.github.io/Series.Show/" class="myprojects__card__image">
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FSeries.Show.png?alt=media&token=9271d919-42d2-4503-af43-774be2030231" alt="Series.Show home">
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
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FTikTok_Clone.png?alt=media&token=de592ce3-15cd-4ad5-b13e-5198fe28d7cb" alt="TikTok Clone preview">
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
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FPHP_Project.png?alt=media&token=7a4f4300-4196-4401-875c-5db6343e85e8" alt="Projeto PHP no GitHub">
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
                    <v-img cover src="https://firebasestorage.googleapis.com/v0/b/portfolio-8240d.appspot.com/o/img%2FPortfolio-GitHub.png?alt=media&token=1d8152ff-22f1-4a56-8a0d-cceb41be1a04" alt="Projeto PHP no GitHub">
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