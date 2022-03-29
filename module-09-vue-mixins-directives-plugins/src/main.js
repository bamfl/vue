import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import translates from './plugins/translates'
import './theme.css'

createApp(App)
  .use(i18n, translates)
  .mount('#app')
