import './registerServiceWorker'

import App from './App.vue'
import ar from "./locales/ar.json";
import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import router from './core/router'
import store from './core/store'

const i18n = createI18n({
    locale: "ae",
    fallbackLocale: "ar",
    messages: { ar, en },
  });
createApp(App).use(i18n).use(store).use(router).mount('#app')
