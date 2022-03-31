import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './theme.css'

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(router)
app.mount('#app')
