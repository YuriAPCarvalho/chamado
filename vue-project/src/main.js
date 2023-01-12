import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import login from './pages/login.vue'
import home from './pages/home.vue'


const router = createRouter ({
    routes: [ 
        { path: '/', component: login },
        { path: '/home', component: home }
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
