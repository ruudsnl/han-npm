import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import './style.css'
import App from './App.vue'
import LoginPage from "./pages/LoginPage.vue";
import BankingPage from "./pages/BankingPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LoginPage },
        { path: '/banking', component: BankingPage },
    ],
})

document.app = createApp(App).use(router).mount('#app')
