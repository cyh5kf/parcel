import Vue from 'vue/dist/vue.js';
import App from './App.vue';

const app = window.addEventListener('load', () => {
    new Vue({
        el: "#vueapp",
        render: h => h(App),
    })
})

export default app;