<script>
export default {
    name: "AdminCategory",
};
</script>

<template>
    <!-- Форма регистраци -->
    <h2 class="main__title">Категории</h2>
    <form class="main__form form">
        <div class="form__row">
            <label for="name" class="form__label">
                Название категории
            </label>
            <input type="text" id="name" class="form__input">
        </div>
        <button type="submit" class="form__button">
            Сохранить
        </button>
    </form>

    <div class="main__category category">
        <ul class="category__items">
            <li class="category__item">
                <a href="#" class="problem__delete">
                    X
                </a>
                Ремонт дорог
            </li>
            <li class="category__item">
                <a href="#" class="problem__delete">
                    X
                </a>
                Уборка мусора
            </li>
            <li class="category__item">
                <a href="#" class="problem__delete">
                    X
                </a>
                Покраска
            </li>
        </ul>
    </div>
</template>

