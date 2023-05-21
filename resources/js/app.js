import app from "./vue-app";

import App from './components/structure/App.vue';
app.component('app', App);

import router from './router';
app.use(router);

// фикс ссылок на картинки
// app.config.globalProperties.baseURL = 'http://demo.test';

app.mount('#vue-app');
