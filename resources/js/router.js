import { createRouter, createWebHistory } from 'vue-router';

import Main from './components/pages/Main.vue';

import Login from './components/pages/auth/Login.vue';
import Register from './components/pages/auth/Register.vue';

import AdminAccount from './components/pages/admin/AdminAccount.vue';
import AdminProblem from './components/pages/admin/AdminProblem.vue';
import AdminCategory from './components/pages/admin/AdminCategory.vue';

import UserAccount from './components/pages/user/UserAccount.vue';
import UserCreateProblem from './components/pages/user/UserCreateProblem.vue';

const routes = [
    {
        name: 'Main',
        path: '/',
        component: Main,
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
    },
    {
        name: 'Register',
        path: '/register',
        component: Register,
    },
    {
        name: 'AdminAccount',
        path: '/admin',
        component: AdminAccount,
    },
    {
        name: 'AdminProblem',
        path: '/admin/problem',
        component: AdminProblem,
    },
    {
        name: 'AdminCategory',
        path: '/admin/category',
        component: AdminCategory,
    },
    {
        name: 'UserAccount',
        path: '/user',
        component: UserAccount,
    },
    {
        name: 'UserCreateProblem',
        path: '/user/problem/create',
        component: UserCreateProblem,
    },
];

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

export default router;
