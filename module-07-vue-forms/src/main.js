import { createApp } from 'vue'
import App from './App.vue'
import CustomInput from  './components/CustomInput.vue';
import './theme.css'

const app = createApp(App);
app.component('CustomInput', CustomInput);

app.mount('#app')
