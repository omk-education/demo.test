<script>
import router from '../../router';

export default {
    name: "VueHeader",
    components: { router }
};
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <!-- <img :src="baseURL + '/logo/logo.svg'" alt="Логотип"> -->
            <router-link :to="{ name: 'Main' }">
                <img src="logo/logo.png" alt="Логотип">
            </router-link>
        </div>
        <nav class="header__menu">
            <ul class="header__list">
                <li>
                    <router-link :to="{ name: 'Main' }" class="header__link">
                        Главная
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Login' }" class="header__link">
                        Вход
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Register' }" class="header__link">
                        Регистрация
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
