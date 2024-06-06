import './bootstrap';
import { createApp } from 'vue';
import router from './routes/index.js';
import store from './store/index.js';
import './index.css'
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import EN from './locale/en.json';
import VI from './locale/vi.json';
import VueFeather from 'vue-feather';

const i18n = createI18n({
    legacy: false,
    locale: store.state.settings.locale || 'en',
    messages: {
        en: EN,
        vi: VI
    }
})
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsis, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faClone, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'

library.add(faEllipsis, faXTwitter, faFacebookF, faLinkedinIn, faInstagram, faPinterestP, faClone, faBookmark, faCircleExclamation)

const app = createApp(App);
app.use(router)
    .provide('$store', store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component(VueFeather.name, VueFeather)
    .use(store)
    .use(i18n)
    .mount("#app");
