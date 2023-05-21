<script>
export default {
    name: "AdminProblem",
};
</script>

<template>
    <!-- Форма изменения статуса заявки -->
    <h2 class="main__title">Изменение статуса заявки</h2>
    <form class="main__form form">
        <div class="form__row">
            <label for="name" class="form__label">
                Название заявки
            </label>
            <input type="text" id="name" class="form__input" value="Проблема1" readonly>
        </div>
        <div class="form__row">
            <label for="status" class="form__label">
                Статус заявки
            </label>
            <select id="status" class="form__select">
                <option value="2">Решена</option>
                <option value="3">Отклонена</option>
            </select>
        </div>
        <div class="form__row">
            <label for="photo" class="form__label">
                Фотография решенной проблемы
            </label>
            <input type="file" id="photo" class="form__input" accept="image/*">
            <div class="form__message">
                Ошибка загрузки фотографии
            </div>
        </div>
        <div class="form__row">
            <label for="reason" class="form__label">
                Причина отказа
            </label>
            <textarea id="reason" cols="30" rows="5" class="form__input"></textarea>
            <div class="form__message">
                Необходимо заполнить причину отказа
            </div>
        </div>
        <button type="submit" class="form__button">
            Сохранить
        </button>
    </form>
</template>

