import { createRouter, createWebHistory } from 'vue-router';

import Main from './components/pages/Main.vue';

const routes = [
    {
        name: 'Main',
        path: '/',
        component: Main,
    }
];

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

export default router;
