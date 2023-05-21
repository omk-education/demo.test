<script>
export default {
    name: "AdminAccount",
};
</script>

<template>
    <h2 class="main__title">
        Панель администратора
    </h2>
    <div class="main__panel panel">
        <!-- Боковое меню -->
        <div class="panel__menu menu">
            <router-link :to="{ name: 'AdminCategory' }" class="menu__button">
                Категории
            </router-link>
            <form class="menu__form form">
                <div class="form__row">
                    <label for="status" class="form__label">
                        Статус заявки
                    </label>
                    <select id="status" class="form__select">
                        <option value="1">Новая</option>
                        <option value="2">Решена</option>
                        <option value="3">Отклонена</option>
                    </select>
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
            </form>
        </div>
        <!-- Рабочая область -->
        <div class="panel__workspace">
            <section class="problem">
                <!-- контейнер -->
                <div class="problem__items">

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_1.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_2.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Решена
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_3.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Решена
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_4.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->

                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_5.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_6.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_7.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>

                    <!-- карточка -->
                    <div class="problem__item">
                        <div class="problem__image">
                            <img src="storage/problem_8.jpg" alt="1">
                        </div>
                        <h3 class="problem__name">
                            Проблема 1
                        </h3>
                        <div class="problem__category">
                            Категория
                        </div>
                        <div class="problem__time">
                            18-05-2023 15:00
                        </div>
                        <div class="problem__status">
                            Новая
                        </div>
                        <router-link :to="{ name: 'AdminProblem' }" class="problem__link">
                            Изменить статус
                        </router-link>
                    </div>


                </div>
            </section>
        </div>
    </div>
</template>
