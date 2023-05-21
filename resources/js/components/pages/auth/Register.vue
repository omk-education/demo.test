<script>
export default {
    name: "Register",
};
</script>

<template>
    <!-- Форма регистраци -->
    <h2 class="main__title">Регистрация</h2>
    <form class="main__form form">
        <div class="form__row">
            <label for="name" class="form__label">
                ФИО
            </label>
            <input type="text" id="name" class="form__input form__input_error">
            <div class="form__message">
                Ошибка 1
            </div>
        </div>
        <div class="form__row">
            <label for="login" class="form__label">
                Логин
            </label>
            <input type="text" id="login" class="form__input form__input_error">
            <div class="form__message">
                Ошибка 1
            </div>
        </div>
        <div class="form__row">
            <label for="email" class="form__label">
                Email
            </label>
            <input type="email" id="email" class="form__input form__input_error">
            <div class="form__message">
                Ошибка 1
            </div>
        </div>
        <div class="form__row">
            <label for="password" class="form__label">
                Пароль
            </label>
            <input type="password" id="password" class="form__input">
            <div class="form__message">
                Ошибка 2
            </div>
        </div>
        <div class="form__row">
            <label for="password_confirmation" class="form__label">
                Подтвердить пароль
            </label>
            <input type="password" id="password_confirmation" class="form__input">
            <div class="form__message">
                Ошибка 2
            </div>
        </div>
        <div class="form__row">
            <label for="rules" class="form__label">
                <input type="checkbox" id="rules" class="form__checkbox" required>
                Согласие на обработку персональных данных
            </label>
            <div class="form__message">
                Ошибка 2
            </div>
        </div>
        <button type="submit" class="form__button">Зарегистрироваться</button>
    </form>
</template>
