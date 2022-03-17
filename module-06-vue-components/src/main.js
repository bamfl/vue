import './styles/style.scss';
import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.component('async-component', defineAsyncComponent(() => import('./components/AsyncComponent.vue')));
app.mount('#app');
