import './styles/style.scss';
import { createApp } from 'vue';
import App from './App.vue';
import GlobalComponent from './components/GlobalComponent.vue';

const app = createApp(App);
app.component('global-component', GlobalComponent);
app.mount('#app');
