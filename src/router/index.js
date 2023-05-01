import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/compat/app';

import SignInPage from '../views/SignInPage.vue'
import HomePage from '../views/HomePage.vue'

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

    // HOME
    {
        path: '/aboutme',
        name: 'aboutme',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/finalpaper',
        name: 'finalpaper',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/mycontacts',
        name: 'mycontacts',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/useraccount',
        name: 'useraccount',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },


]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('aboutme');
    else next();
});


export default router
