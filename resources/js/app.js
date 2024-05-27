import './bootstrap';
import { createApp } from 'vue';
import router from './routes/index.js';
import store from './store/index.js';
import './index.css'
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import EN from './locale/en.json';
import VI from './locale/vi.json';

const i18n = createI18n({
    legacy: false,
    locale: store.state.settings.locale || 'en',
    messages: {
        en: EN,
        vi: VI
    }
})

const app = createApp(App);
app.use(router)
    .provide('$store', store)
    .use(store)
    .use(i18n)
    .mount("#app");
