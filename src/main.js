import { createApp } from 'vue'
import App from './App.vue'
import modalPlugin from './plugins/modalPlugin'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(modalPlugin).mount('#app')
