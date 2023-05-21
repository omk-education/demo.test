import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// подключаем плагин vue
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [

        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),

        vue({
            template: {
                transformAssetUrls: {
                    // ссылка на сайт
                    base: "http://city.example",
                    includeAbsolute: false,
                },
            },
        }),

    ],
    // base: '/',
});
