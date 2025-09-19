<template>
    <v-row class="myprojects__row">
        <v-col
        v-for="(project, index) in localizedProjects"
        :key="index"
        cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
        class="myprojects__col"
        >
            <v-card class="myprojects__card">
                <v-card-title class="page__title pt-4">{{ project.title }}</v-card-title>
                <v-card class="myprojects__card__link" elevation="8" rounded="lg">
                    <a :href="`${project.url}`" class="myprojects__card__image" target="_blank">
                        <v-img cover height="20vh" :src="`img/cover/${project.img}`" :alt="`${project.title} home`">
                        </v-img>
                    </a>
                </v-card>
                <v-card-text class="card__text-justify myprojects__text_card">
                    <span v-if="project.about">
                        <v-divider></v-divider>
                        <br>
                        <span style="color: #640abd;" class="mdi mdi-circle-medium"></span>
                        {{ project.about }}
                    </span>
                    <span v-if="project.tech">
                        <br>
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <span style="color: #640abd;" class="mdi mdi-circle-medium"></span>
                        {{ project.tech }}
                    </span>
                    <span v-if="project.desc">
                        <br>
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <span style="color: #640abd;" class="mdi mdi-circle-medium"></span>
                        {{ project.desc }}
                    </span>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/main.js'
import i18n from '@/i18n'

export default {
    data() {
        return {
            projects: []
        }
    },
    async mounted(){
        const querySnapshot = await getDocs(collection(db, 'myProjects'));
        const projects_ = []
        querySnapshot.forEach((doc) => {
            projects_.push(doc.data());
            console.log(projects_);
        })

        projects_.sort((a, b) => b.priority - a.priority)
        this.projects = projects_;
    },
    computed: {
        localizedProjects() {
            return this.projects.map(project => {
                return {
                    ...project,
                    title: project[`title_${i18n.global.locale.value}`] || project[`title_en`],
                    about: project[`about_${i18n.global.locale.value}`] || project[`about_en`],
                    tech: project[`tech_${i18n.global.locale.value}`] || project[`tech_en`],
                    desc: project[`desc_${i18n.global.locale.value}`] || project[`desc_en`],
                }
            })
        }
    }
}
</script>
