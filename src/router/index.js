import { createRouter, createWebHistory } from 'vue-router'
// import firebase from 'firebase/compat/app';

import SignInPage from '../views/SignInPage.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
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

    {
        path: '/home',
        name: 'home',
        component: HomeView,

    },
]
        // meta: {
        // requiresAuth: true
        // }


    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

    // router.beforeEach((to, from, next) => {
    // const currentUser = firebase.auth().currentUser;
    // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // if (requiresAuth && !currentUser) next('login');
    // else if (!requiresAuth && currentUser) next('home');
    // else next();
//});


export default router
