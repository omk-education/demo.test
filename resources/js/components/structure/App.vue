<script>
import VueHeader from "./VueHeader.vue";
import VueFooter from "./VueFooter.vue";

export default {
    name: "App",
    components: {
        "vue-header": VueHeader,
        "vue-footer": VueFooter,
    },
};
</script>

<template>
    <vue-header></vue-header>
    <main class="main">
        <router-view></router-view>
    </main>
    <vue-footer></vue-footer>
</template>
