<script>
export default {
    name: "Login",
};
</script>

<template>
    <!-- Форма авторизации -->
    <h2 class="main__title">
        Авторизация
    </h2>
    <form class="main__form form">

        <div class="form__row">
            <label for="login" class="form__label">
                Логин
            </label>
            <input type="text" id="login" class="form__input">
            <div class="form__message">
                Вы ввели неверный логин и/или пароль
            </div>
        </div>

        <div class="form__row">
            <label for="password" class="form__label">
                Пароль
            </label>
            <input type="password" id="password" class="form__input">
            <div class="form__message">
                Вы ввели неверный логин и/или пароль
            </div>
        </div>

        <button type="submit" class="form__button">
            Войти
        </button>

        <!-- Удалить после создания авторизации -->
        <hr class="form__row">
        <router-link :to="{ name: 'UserAccount' }" class="header__link">
            Пользователь
        </router-link>
        &nbsp;
        <router-link :to="{ name: 'AdminAccount' }" class="header__link">
            Администратор
        </router-link>
        <!-- Удалить после создания авторизации -->

    </form>
</template>
