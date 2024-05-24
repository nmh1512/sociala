import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/auth/Login.vue';
import Register from './../pages/auth/Register.vue'
import DefaultLayout from './../layouts/DefaultLayout.vue'
import AuthLayout from './../layouts/AuthLayout.vue'
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/stories',
                name: 'Stories',
                component: Home
            },
            {
                path: '/videos',
                name: 'Videos',
                component: Home
            },
            {
                path: '/groups',
                name: 'Groups',
                component: Home
            }
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/login',
                component: Login,
                name: 'Login'
            },
            {
                path: '/register',
                component: Register,
                name: 'Register'
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Login'})
    } else if (store.state.user.token && to.meta.isGuest) {
        next({name: 'Home'})
    }
    next();
})

export default router