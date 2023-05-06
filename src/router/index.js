import { createRouter, createMemoryHistory } from 'vue-router'

import SignInPage from '../views/SignInPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/aboutme'
    },
    {
        path: '/',
        redirect: '/aboutme'
    },

    // INÍCIO

    {
        path: '/login',
        name: 'login',
        component: SignInPage,
    },
    {
        path: '/register',
        name: 'register',
        component: SignInPage,
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        component: SignInPage,
    },

    // HOME
    {
        path: '/aboutme',
        name: 'aboutme',
        component: HomePage,
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: HomePage,
    },
    {
        path: '/finalpaper',
        name: 'finalpaper',
        component: HomePage,
    },
    {
        path: '/mycontacts',
        name: 'mycontacts',
        component: HomePage,
    },
    {
        path: '/useraccount',
        name: 'useraccount',
        component: HomePage,
    },


]


const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
