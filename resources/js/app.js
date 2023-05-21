import app from "./vue-app";

import router from './router';
app.use(router);

// фикс ссылок на картинки
// app.config.globalProperties.baseURL = 'http://demo.test';

app.mount('#vue-app');
