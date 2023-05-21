<script>
export default {
    name: "UserCreateProblem",
};
</script>

<template>
    <!-- Форма создания заявки -->
    <h2 class="main__title">Создание заявки</h2>
    <form class="main__form form">
        <div class="form__row">
            <label for="name" class="form__label">
                Название
            </label>
            <input type="text" id="name" class="form__input" required>
            <div class="form__message">
                Введите название проблемы
            </div>
        </div>
        <div class="form__row">
            <label for="description" class="form__label">
                Описание проблемы
            </label>
            <textarea id="description" cols="30" rows="5" class="form__input"></textarea>
            <div class="form__message">
                Введите описание проблемы
            </div>
        </div>
        <div class="form__row">
            <label for="category" class="form__label">
                Категория заявки
            </label>
            <select id="category" class="form__select">
                <option value="1">Ремонт дорог</option>
                <option value="2">Уборка мусора</option>
                <option value="3">Покраска</option>
            </select>
        </div>
        <div class="form__row">
            <label for="photo" class="form__label">
                Фотография проблемы
            </label>
            <input type="file" id="photo" class="form__input" accept="image/*">
            <div class="form__message">
                Ошибка загрузки фотографии
            </div>
        </div>
        <button type="submit" class="form__button">
            Добавить
        </button>
    </form>
</template>
